const API_BASE = 'http://localhost:3004';

const endpoints = {
    users: `${API_BASE}/users`,
    orders: `${API_BASE}/orders`,
    products: `${API_BASE}/products`
};

const cards = {
    users: { title: 'Total Users', element: document.getElementById('users-card') },
    orders: { title: 'Total Orders', element: document.getElementById('orders-card') },
    products: { title: 'Total Products', element: document.getElementById('products-card') }
};

function renderCard(key, count) {
    const card = cards[key];
    if (!card) return;

    card.element.innerHTML = `
        <div class="card-title">${card.title}</div>
        <div class="card-value">${count !== null ? count : 'N/A'}</div>
    `;
}

function renderError(key) {
    const card = cards[key];
    if (!card) return;

    card.element.innerHTML = `
        <div class="card-title">${card.title}</div>
        <div class="card-value" style="color: #e53935;">Error</div>
    `;
}

function fetchData() {
    // Attempt to fetch data from all three endpoints
    const userPromise = fetch(endpoints.users).then(res => res.json()).then(data => data.length);
    const orderPromise = fetch(endpoints.orders).then(res => res.json()).then(data => data.length);
    const productPromise = fetch(endpoints.products).then(res => res.json()).then(data => data.length);

    const promises = [userPromise, orderPromise, productPromise];

    // Use Promise.all with .catch() on individual promises to ensure all promises settle
    Promise.all(promises.map(p => p.catch(error => {
        console.error("API Fetch Error:", error);
        return { error: true }; // Return a consistent error object
    })))
    .then(results => {
        let hasError = false;

        const [userCount, orderCount, productCount] = results;

        if (userCount && !userCount.error) {
            renderCard('users', userCount);
        } else {
            renderError('users');
            hasError = true;
        }

        if (orderCount && !orderCount.error) {
            renderCard('orders', orderCount);
        } else {
            renderError('orders');
            hasError = true;
        }

        if (productCount && !productCount.error) {
            renderCard('products', productCount);
        } else {
            renderError('products');
            hasError = true;
        }

        if (hasError) {
            document.getElementById('warning-message').style.display = 'block';
            document.getElementById('warning-message').textContent = 'Warning: Some data could not be loaded.';
        }
    })
    .catch(error => {
        console.error("Critical error in Promise.all:", error);
        document.getElementById('warning-message').style.display = 'block';
        document.getElementById('warning-message').textContent = 'Critical error loading dashboard data.';
        // Clear skeletons and show errors
        Object.keys(cards).forEach(key => renderError(key));
    });
}

document.addEventListener('DOMContentLoaded', fetchData);