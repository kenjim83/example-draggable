var app = {}

app.ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

app.HIGHEST_Z_INDEX = 1;

app.renderProducts = function(posts){
    var html = '<section class="panels">';
    html += posts.map(function(post, index){
        var num = index + 1;
        return '<div class="holder">' +
                '<div class="draggable panel panel-primary">' +
                    '<div class="panel-heading">' + num + ': ' + post.title + '</div>' +
                    '<div class="panel-body">' + '$' + post.body + '</div>' +
                '</div>' +
                '</div>';
    }).join('');

    html += '</section>';
    $('#entry').html(html);
    var $draggableDivs = $('.draggable');
    $draggableDivs.draggable();
    $draggableDivs.mousedown(function(){
        $(this).css('z-index', app.HIGHEST_Z_INDEX);
        app.HIGHEST_Z_INDEX++;
    });
};

app.start = function(){
    this.getProducts().then(this.renderProducts);
};


app.getProducts = function(){
    return $.get(app.ENDPOINT);
};

// makes sure DOM is loaded before executing JavaScript
window.onload = function(){
    app.start();
};



