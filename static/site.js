$( document ).ready(function() {
    
    $('#markdown').css('font-size', parseInt($('#fontSize').val()));

    $('#convert').click(function(){
        const format = $('#convertFormat').val();
        const markdown = $('#markdown').val();
        if (format=="md") {
            download(markdown, "markdown.md");
        }
        var converter = new showdown.Converter();
        var html = converter.makeHtml(markdown);
        if (format=="html") {
            download(html, "markdown.html");
        }
        if (format=="pdf") {
            var doc = new jsPDF();
            doc.fromHTML(html, 15, 15, {
                'width': 170
            });
            doc.save('markdown.pdf');
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

    $('#fontFamily').change(function(){
        $('#markdown').css('font-family', $('#fontFamily').val());
    });

    $('#fontSize').change(function(){
        const fontSize = parseInt($(this).val());
        $('#markdown').css('font-size', fontSize);
    });
});

