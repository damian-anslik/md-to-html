$(document).ready(function () {
    
    var markdown = sessionStorage.getItem('markdown');
    var fontFamily = localStorage.getItem('fontFamily');
    var fontSize = localStorage.getItem('fontSize');
    var convertFormat = localStorage.getItem('convertFormat');

    // Set the users markdown and preferences
    if (markdown) {
        $('#markdown').val(markdown);
    }
    if (fontFamily) {
        $('#fontFamily').val(fontFamily);
        $('#markdown').css('font-family', fontFamily);
    }
    if (fontSize) {
        $('#fontSize').val(fontSize);
        $('#markdown').css('font-size', fontSize + 'px');
    }
    if (convertFormat) {
        $('#convertFormat').val(convertFormat);
    }
    
});

// Save the users markdown on page refresh
window.addEventListener('beforeunload', function (e) {
    var markdown = $('#markdown').val();
    sessionStorage.setItem('markdown', markdown);
});

$('#convert').click(function () {
    const format = $('#convertFormat').val();
    const markdown = $('#markdown').val();
    if (format == "md") {
        download(markdown, "markdown.md");
    }
    var converter = new showdown.Converter();
    var html = converter.makeHtml(markdown);
    if (format == "html") {
        download(html, "markdown.html");
    }
    if (format == "pdf") {
        var doc = new jsPDF();
        doc.fromHTML(html, 15, 15, {
            'width': 170
        });
        doc.save('markdown.pdf');
    }
    return false;
});

$('#file-input').change(function () {
    const file = this.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        $('#markdown').val(e.target.result);
    }
});

$('#convertFormat').change(function () {
    const format = $('#convertFormat').val();
    localStorage.setItem('convertFormat', format);
});

$('#fontFamily').change(function () {
    const fontFamily = $('#fontFamily').val();
    localStorage.setItem('fontFamily', fontFamily);
    $('#markdown').css('font-family', fontFamily);
});

$('#fontSize').change(function () {
    const fontSize = parseInt($(this).val());
    localStorage.setItem('fontSize', fontSize);
    $('#markdown').css('font-size', fontSize);
});