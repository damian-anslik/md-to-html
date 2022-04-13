$(document).ready(function () {
    
    var preferences = {
        fontFamily: localStorage.getItem('fontFamily') || 'Arial',
        fontSize: localStorage.getItem('fontSize') || '16',
        format: localStorage.getItem('format') || 'md',
    };
    
    var sessionData = {
        title: sessionStorage.getItem('title') || '',
        markdown: sessionStorage.getItem('markdown') || '',
        markdownHeight: sessionStorage.getItem('markdownHeight') || '700',
        markdownWidth: sessionStorage.getItem('markdownWidth') || '700',
    };
    
    $('#document-title').val(sessionData.title);
    $('#markdown').val(sessionData.markdown);
    $('#markdown').css('font-family', preferences.fontFamily);
    $('#markdown').css('font-size', parseInt(preferences.fontSize));
    $('#markdown').css('height', parseInt(sessionData.markdownHeight));
    $('#markdown').css('width', parseInt(sessionData.markdownWidth));
    $('#font-family').val(preferences.fontFamily);
    $('#font-size').val(preferences.fontSize);
    $('#output-format').val(preferences.format);
    
    // Save the users markdown on page refresh
    window.addEventListener('beforeunload', function (e) {
        var markdown = $('#markdown');
        var markdownHeight = markdown.height();
        var mardownWidth = markdown.width();
        sessionStorage.setItem('markdown', markdown.val());
        sessionStorage.setItem('markdownHeight', markdownHeight);
        sessionStorage.setItem('markdownWidth', mardownWidth);
    });
});
