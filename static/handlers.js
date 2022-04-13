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

$('.document-title').change(function () {
    const title = $(this).val();
    sessionStorage.setItem('title', title);
});

// Save the users markdown on page refresh
window.addEventListener('beforeunload', function (e) {
    var markdown = $('#markdown').val();
    sessionStorage.setItem('markdown', markdown);
});

$('#convert').click(function () {
    const format = $('#convertFormat').val();
    const markdown = $('#markdown').val();
    const title = $('.document-title').val();
    const filename = title + '.' + format;
    if (format == "md") {
        download(markdown, filename);
    }
    var converter = new showdown.Converter();
    var html = converter.makeHtml(markdown);
    if (format == "html") {
        download(html, filename);
    }
    if (format == "pdf") {
        var doc = new jsPDF();
        doc.fromHTML(html, 15, 15, {
            'width': 170
        });
        doc.save(filename);
    }
    return false;
});
