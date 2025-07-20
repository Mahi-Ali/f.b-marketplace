 document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json') // Imagine a JSON file with product data
        .then(response => response.json())
        .then(products => {
            const productListings = document.querySelector('.product-listings');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price}</p>
                    <p class="location">${product.location}</p>
                    <button class="message-seller" data-product-id="${product.id}">Message Seller</button>
                `;
                productListings.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});


const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const location = card.querySelector('.location').textContent.toLowerCase();
        if (title.includes(searchTerm) || location.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});