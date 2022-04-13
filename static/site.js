$(document).ready(function () {
    
    var preferences = {
        fontFamily: localStorage.getItem('fontFamily') || 'Arial',
        fontSize: localStorage.getItem('fontSize') || '16',
        format: localStorage.getItem('format') || 'md',
    };

    var sessionData = {
        title: sessionStorage.getItem('title') || '',
        markdown: sessionStorage.getItem('markdown') || '',
    };
    
    $('#document-title').val(sessionData.title);
    $('#markdown').val(sessionData.markdown);
    $('#markdown').css('font-family', preferences.fontFamily);
    $('#markdown').css('font-size', parseInt(preferences.fontSize));
    $('#font-family').val(preferences.fontFamily);
    $('#font-size').val(preferences.fontSize);
    $('#output-format').val(preferences.format);
    
    // Save the users markdown on page refresh
    window.addEventListener('beforeunload', function (e) {
        var markdown = $('#markdown').val();
        sessionStorage.setItem('markdown', markdown);
    });
});
