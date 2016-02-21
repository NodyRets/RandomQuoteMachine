$(document).ready(function () {
    setRandomQuote();
    $('#btn-quote').click(function () {
        setRandomQuote();
    });
});

function setRandomQuote() {
    var rand = Math.floor((Math.random() * 10) + 1);
    $.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + rand + "&callback=", function (data) {
        var quotePost = data.shift();
        $('#quote, #author').fadeOut(function () {
            $('#quote').html('"' + $(quotePost.content).text() + '"').fadeIn();
            $('#author').html(quotePost.title).fadeIn();
        });
    });
}