$('#convertFormat').change(function () {
    const format = $(this).val();
    localStorage.setItem('convertFormat', format);
});

$('#fontFamily').change(function () {
    const fontFamily = $(this).val();
    localStorage.setItem('fontFamily', fontFamily);
    $('#markdown').css('font-family', fontFamily);
});

$('#fontSize').change(function () {
    const fontSize = parseInt($(this).val());
    localStorage.setItem('fontSize', fontSize);
    $('#markdown').css('font-size', fontSize);
});

$('#markdown').change(function () {
    const markdown = $(this).val();
    sessionStorage.setItem('markdown', markdown);
});

$('.document-title').change(function () {
    const title = $(this).val();
    sessionStorage.setItem('title', title);
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