$(document).ready(function () {
    
    var preferences = {
        fontFamily: localStorage.getItem('fontFamily') || 'Arial',
        fontSize: localStorage.getItem('fontSize') || '16',
        convertFormat: localStorage.getItem('convertFormat') || 'md',
    };

    var sessionData = {
        title: sessionStorage.getItem('title') || '',
        markdown: sessionStorage.getItem('markdown') || '',
    };
    
    $('#markdown').val(sessionData.markdown);
    $('.document-title').val(sessionData.title);
    $('#fontFamily').val(preferences.fontFamily);
    $('#fontSize').val(preferences.fontSize);
    $('#convertFormat').val(preferences.convertFormat);
    $('#markdown').css('font-family', preferences.fontFamily);
    $('#markdown').css('font-size', parseInt(preferences.fontSize));
    
});
