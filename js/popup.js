(function ($, APP) {
    var length = APP.products.length;
    var product = APP.products[Math.floor(Math.random() * length)];
    var $popup = $('.popup');
    var count = +localStorage.count;

    if (!count || count > 5) {
        return localStorage.count = 2;
    }
    if (count++ < 5) {
        return localStorage.count = count;
    }
    localStorage.count = 1;

    $popup.html(APP.renderProduct(product)).css('z-index', 10000);
    $popup.find('.product').removeClass('col-sm-3').css('background', 'blanchedalmond');

    $(window).one('click', function () {
        $popup.remove();
    });

    $popup.find('.add').click(function () {
        APP.basket.push(product);
        APP.renderBasket(APP.basket);
        $('.shopping-cart').fadeIn('slow');
    });
}($, APP));
