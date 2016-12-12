(function ($, APP) {
    var template = '<li class="clearfix" name="productId"> <img src="productImg" alt="item1" width="70"> <span class="item-name">productName</span> <span class="item-price">productPrice</span> <span class="item-quantity">Quantity: 01</span> <span class="item-quantity remove">X</span></li>';
    
    APP.renderBasketProduct = function (product) {
        return template
            .replace('productId', product.id)
            .replace('productImg', product.img)
            .replace('productName', product.name)
            .replace('productPrice', product.price)
    };
}($, APP));

