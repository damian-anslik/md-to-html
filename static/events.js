$('#output-format').change(function () {
    const format = $(this).val();
    localStorage.setItem('format', format);
});

$('#font-family').change(function () {
    const fontFamily = $(this).val();
    localStorage.setItem('fontFamily', fontFamily);
    $('#markdown').css('font-family', fontFamily);
});

$('#font-size').change(function () {
    const fontSize = parseInt($(this).val());
    localStorage.setItem('fontSize', fontSize);
    $('#markdown').css('font-size', fontSize);
});

$('#markdown').change(function () {
    const markdown = $(this).val();
    sessionStorage.setItem('markdown', markdown);
});

$('#document-title').change(function () {
    const title = $(this).val();
    sessionStorage.setItem('title', title);
});

$('#convert').click(function () {
    const DEFAULT_DOC_TITLE = 'untitled-markdown';
    let document = {
        title: $('#document-title').val() || DEFAULT_DOC_TITLE,
        markdown: $('#markdown').val(),
        format: $('#output-format').val()
    };
    let filename = document.title + '.' + document.format;
    if (document.format === "md") {
        download(document.markdown, filename, 'text/plain');
        return false;
    } 
    let html = new showdown.Converter().makeHtml(document.markdown);
    if (document.format === 'pdf') {
        let pdf = new jsPDF();
        pdf.fromHTML(html, 10, 10);
        pdf.save(filename);
    }
    if (document.format === 'html') {
        download(html, filename, 'text/html');
    }
    return false;
});