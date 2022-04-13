$(document).ready(function () {
    
    var markdown = sessionStorage.getItem('markdown');
    var documentTitle = sessionStorage.getItem('title');
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
    if (documentTitle) {
        $('.document-title').val(documentTitle);
    }
    
});
