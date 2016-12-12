(function ($, APP) {
    var template = '<div class="col-sm-3 product" id="productId"><div class="moto-widget-store-main_item moto-widget-store-image-block moto-align-center"> <div class="moto-widget moto-widget-image moto-preset-4"store-lightbox-gallery=""> <a class="moto-widget-image-link"href="#"> <img src="productImg"class="moto-widget-image-picture"> </a></div> <a href="#"class="moto-widget-store-main_item-title"> <span class="moto-text_116">productName</span> </a> <div class="store-product-element-container"> <div class="moto-widget-store-main_item-price"> <span class="moto-text_115">productPrice</span> </div> </div> <div class="store-product-element-container moto-widget-button moto-preset-2"data-store-product-add-to-cart="" data-product-id="9"data-location="/store/cart" data-autoredirect="true"> <a href="#"class="add moto-widget-button-link moto-size-medium"> <span class="fa moto-widget-theme-icon"></span> <span class="moto-widget-button-label">ADD TO CART</span> </a> </div> </div> </div>';

    APP.renderProduct = function (product) {
        return template
            .replace('productId', product.id)
            .replace('productImg', product.img)
            .replace('productName', product.name)
            .replace('productPrice', product.price)
    };
}($, APP));
