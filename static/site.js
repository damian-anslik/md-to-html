$( document ).ready(function() {
    
    $('#convert').click(function(){
        const format = $('#convertFormat').val();
        const markdown = $('#markdown').val();
        if (format=="md") {
            download(markdown, "markdown.md");
        }
        else if (format=="html") {
            var converter = new showdown.Converter();
            var html = converter.makeHtml(markdown);
            download(html, "markdown.html");
        }
        return false;
    });

    $('#file-input').change(function(){
        const file = this.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {
            $('#markdown').val(e.target.result);
        }
    });
});

