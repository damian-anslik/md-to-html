$(document).ready(function () {

    // Save the users markdown and preferences
    window.addEventListener('beforeunload', function (e) {
        sessionStorage.setItem('markdown', $('#markdown').val());
        sessionStorage.setItem('fontFamily', $('#fontFamily').val());
        sessionStorage.setItem('fontSize', parseInt($('#fontSize').val()));
        sessionStorage.setItem('convertFormat', $('#convertFormat').val());
        console.log(sessionStorage)
    });

    // Load the users markdown and preferences
    if (sessionStorage.getItem('markdown')) {
        $('#markdown').val(sessionStorage.getItem('markdown'));
    }
    if (sessionStorage.getItem('fontFamily')) {
        var fontFamily = sessionStorage.getItem('fontFamily');
        $('#fontFamily').val(fontFamily);
        $('#markdown').css('font-family', fontFamily);
    }
    if (sessionStorage.getItem('fontSize')) {
        var fontSize = sessionStorage.getItem('fontSize');
        $('#fontSize').val(fontSize);
        $('#markdown').css('font-size', fontSize + 'px');
    }
    if (sessionStorage.getItem('convertFormat')) {
        var convertFormat = sessionStorage.getItem('convertFormat');
        $('#convertFormat').val(convertFormat);
    }

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

    $('#fontFamily').change(function () {
        $('#markdown').css('font-family', $('#fontFamily').val());
    });

    $('#fontSize').change(function () {
        const fontSize = parseInt($(this).val());
        $('#markdown').css('font-size', fontSize);
    });
});

