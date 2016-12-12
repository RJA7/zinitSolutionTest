(function ($) {
    var $myCarts = $('.cart');
    var $basket = $('.shopping-cart');
    var ids = APP.products.map(function (product) {
        return product.id;
    });
    var $search = $('.search-form_input');
    var basketIds;
    var product;
    var id;

    // toggle basket
    $myCarts.click(function () {
        APP.userHistory.push('Basket watching');
        $basket.fadeToggle('slow');
    });

    // adds product to basket
    $('section').on('click', '.add', function (e) {
        id = $(e.currentTarget).closest('.product').attr('id');

        basketIds = APP.basket.map(function (product) {
            return product.id;
        });

        if (basketIds.indexOf(+id) !== -1) return;

        APP.userHistory.push('Add to basket ' + id);

        product = APP.products[ids.indexOf(+id)];
        APP.basket.push(product);
        APP.renderBasket(APP.basket);
        $basket.fadeIn('slow');
    });

    //remove from basket
    $basket.on('click', '.remove', function (e) {
        var $el = $(e.currentTarget).closest('li.clearfix');
        id = +$el.attr('name');
        $el.remove();

        APP.userHistory.push('Remove from basket ' + id);

        basketIds = APP.basket.map(function (product) {
            return product.id;
        });
        APP.basket.splice(basketIds.indexOf(id), 1);
        APP.renderBasket(APP.basket);
        $basket.fadeIn('slow');
    });

    // search filter
    $search.on('change keyup paste mouseup', function () {
        var text = $search.val().toLowerCase();
        var products;

        APP.userHistory.push('Search for ' + text);

        products = APP.products.filter(function (product) {
            return product.name.toLowerCase().indexOf(text) !== -1;
        });

        APP.renderRows(products);
    });

    // post to server
    $('.checkout').click(function () {
        APP.userHistory.push('Checkout');

        if (!APP.basket.length) return;

        $.post('ajax.php', APP.basket, function (res) {
            APP.basket = [];
            APP.renderBasket(APP.basket);
        });
    });
}($));
