(function ($, APP) {
    var template = '<div class="moto-widget moto-widget-row row-fixed" data-widget="row"> <div class="container-fluid"> <div class="row"> <div class="moto-cell col-sm-12" data-container="container"> <div class="moto-widget moto-widget-store-product-grid moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto "data-widget="store_product_grid" data-preset="default"data-align="{&quot;desktop&quot;:&quot;center&quot;,&quot;tablet&quot;:&quot;&quot;,&quot;mobile-h&quot;:&quot;&quot;,&quot;mobile-v&quot;:&quot;&quot;}"data-spacing="masa"> <div class="row productsRow"> </div> </div> </div> </div> </div> </div>';

    APP.renderRows = function (products) {
        var rows = [];
        var $row;

        products.forEach(function (product, index) {
            if (index % 4 === 0) {
                $row = $(template);
                rows.push($row);
            }
            
            $row.find('.productsRow').append(APP.renderProduct(product));
        });

        $('section > div').html('').append(rows);
    };

    APP.renderRows(APP.products);
}($, APP));
