$(document).ready(function() {

    $('.product-card').on('click', function(event) {
        if (!$(event.target).hasClass('favorite-icon')) {
            $('.product-card').removeClass('highlighted');
            $(this).addClass('highlighted');

            const stockStatus = $(this).data('stock'); // Get the value of data-stock
            if (stockStatus === 'out-of-stock') {
                alert("Product is currently out of stock.");
            }
        }
    });

    $('.product-card').hover(
        function() {
            $(this).find('.product-details').fadeIn(200);
        },
        function() {
            $(this).find('.product-details').fadeOut(200);
        }
    );

    $('.favorite-icon').on('click', function(e) {
        e.stopPropagation();
        $(this).toggleClass('selected');
        const productId = $(this).data('product-id');
        const action = $(this).hasClass('selected') ? "Favorited" : "Unfavorited";
        console.log(`${action} Product ID: ${productId}`);
    });

});