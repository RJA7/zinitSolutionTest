(function ($, APP) {
    var $basket = $('.shopping-cart-items');
    var $totalPrice = $('#totalPrice');
    var $count = $('#count');
    var sBasket = localStorage.basket;
    var basket = [];
    var totalPrice;
    var count;

    if (sBasket) {
        basket = JSON.parse(sBasket);
    } else {
        localStorage.basket = JSON.stringify(basket);
    }

    APP.renderBasket = function (basket) {
        count = basket.length;
        totalPrice = 0;
        localStorage.basket = JSON.stringify(basket);

        $basket.html('');
        basket.forEach(function (product) {
            totalPrice += +product.price.slice(1);
            $basket.append(APP.renderBasketProduct(product));
        });

        $totalPrice.html(totalPrice);
        $count.html(count);
    };

    APP.renderBasket(basket);
    APP.basket = basket;
}($, APP));
