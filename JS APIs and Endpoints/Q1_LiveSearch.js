$(document).ready(function() {
    const API_URL = 'http://localhost:3001/products';
    const $searchInput = $('#search-input');
    const $searchResults = $('#search-results');
    const $loading = $('#loading');
    let currentRequest = null;

    function renderResults(products) {
        let html = '';
        if (products.length === 0) {
            html = '<div class="no-results">No products found.</div>';
        } else {
            products.forEach(product => {
                html += `
                    <div class="product-item">
                        <img class="product-image" src="${product.image}" alt="${product.name}" width="50" height="50">
                        <div class="product-info">
                            <div class="product-name">${product.name}</div>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                        </div>
                    </div>
                `;
            });
        }
        $searchResults.html(html);
    }

    function searchProducts(query) {
        if (currentRequest) {
            currentRequest.abort();
        }

        if (query.length < 1) {
            $searchResults.empty();
            $loading.hide();
            return;
        }

        $searchResults.empty();
        $loading.show();

        currentRequest = $.ajax({
            url: API_URL,
            method: 'GET',
            data: { q: query },
            dataType: 'json'
        })
        .done(function(products) {
            $loading.hide();
            renderResults(products);
        })
        .fail(function(jqXHR, textStatus) {
            if (textStatus !== 'abort') {
                $loading.hide();
                $searchResults.html('<div class="no-results">Error loading data. Please check the JSON Server connection.</div>');
            }
        });
    }

    $searchInput.on('keyup', function() {
        const query = $(this).val();
        searchProducts(query);
    });

    searchProducts('');
});