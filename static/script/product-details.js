document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    const product = products.find(p => p.id === productId);

    if (!product) {
        alert("Product not found!");
        window.location.href = 'index.html';
        return;
    }

    // Populate Basic Info
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productManufacturer').innerText = product.manufacturer;
    document.getElementById('productDescription').innerText = product.description;
    document.getElementById('originalPrice').innerText = `₹ ${product.originalPrice.toLocaleString()}`;
    document.getElementById('newPrice').innerText = `₹ ${product.price.toLocaleString()}`;
    document.getElementById('ratingValue').innerText = product.rating;
    document.title = `${product.name} - LoftOriginals`;

    // Populate Company Details
    if (product.companyDetails) {
        document.getElementById('companyDetails').innerText = product.companyDetails;
    }

    // Render Images in Carousel
    const carouselTrack = document.getElementById('productCarousel');
    const indicatorContainer = document.querySelector('.carousel-indicators-custom');

    product.images.forEach((img, index) => {
        const imgEl = document.createElement('img');
        imgEl.src = img;
        imgEl.classList.add('carousel-item-img');
        imgEl.alt = `${product.name} - ${index + 1}`;
        carouselTrack.appendChild(imgEl);

        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
        indicatorContainer.appendChild(dot);
    });

    // Carousel Logic
    let currentIndex = 0;
    window.moveCarousel = function (direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = product.images.length - 1;
        if (currentIndex >= product.images.length) currentIndex = 0;
        updateCarousel();
    };

    function updateCarousel() {
        const track = document.getElementById('productCarousel');
        const width = track.parentElement.clientWidth;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        document.querySelectorAll('.indicator-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    // Render Stars
    const starsContainer = document.getElementById('starRating');
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        if (i < fullStars) {
            star.className = 'bi bi-star-fill';
        } else if (i === fullStars && hasHalfStar) {
            star.className = 'bi bi-star-half';
        } else {
            star.className = 'bi bi-star';
        }
        starsContainer.appendChild(star);
    }

    // Handle Size Selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            sizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Handle Quantity Selection
    const qInput = document.getElementById('productQty');
    document.getElementById('qtyMinus').addEventListener('click', () => {
        let q = parseInt(qInput.value);
        if (q > 1) qInput.value = q - 1;
    });
    document.getElementById('qtyPlus').addEventListener('click', () => {
        qInput.value = parseInt(qInput.value) + 1;
    });

    // Render Reviews
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (product.reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="text-muted">No reviews yet for this product.</p>';
    } else {
        reviewsContainer.innerHTML = '';
        product.reviews.forEach(review => {
            const reviewCard = `
                <div class="col-md-6">
                  <div class="review-card shadow-sm h-100">
                    <div class="d-flex justify-content-between mb-2">
                      <span class="fw-bold">${review.user}</span>
                      <span class="text-warning">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <p class="mb-2">${review.comment}</p>
                    <span class="small text-muted">${new Date(review.date).toLocaleDateString()}</span>
                  </div>
                </div>
            `;
            reviewsContainer.innerHTML += reviewCard;
        });
    }

    // Render Similar Products
    renderSimilarProducts(product);

    // Cart Count
    updateCartCount();
});

function renderSimilarProducts(currentProduct) {
    const similarContainer = document.getElementById('similarProductsContainer');
    const similarProducts = products.filter(p => p.id !== currentProduct.id).slice(0, 4);

    similarContainer.innerHTML = '';
    similarProducts.forEach(p => {
        const pCard = `
            <div class="col-6 col-md-3">
              <div class="similar-p-card card h-100 p-2 shadow-sm">
                <div class="wishlist-heart-overlay" onclick="toggleSimilarWishlist(this, event)">
                  <i class="bi bi-heart"></i>
                </div>
                <a href="product-details.html?id=${p.id}" class="text-decoration-none d-block h-100" style="color: inherit;">
                  <img src="${p.images[0]}" class="similar-p-img mb-2" alt="${p.name}">
                  <h6 class="fw-bold small mb-1 truncate-text">${p.name}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                     <span class="fw-bold small">₹ ${p.price.toLocaleString()}</span>
                     <span class="small opacity-75 text-warning">${p.rating} ★</span>
                  </div>
                </a>
              </div>
            </div>
        `;
        similarContainer.innerHTML += pCard;
    });
}

window.toggleWishlist = function () {
    const btn = document.querySelector('.wishlist-btn');
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.className = 'bi bi-heart-fill';
        // Simulate adding to wishlist
    } else {
        icon.className = 'bi bi-heart';
    }
};

window.toggleSimilarWishlist = function (el, event) {
    event.preventDefault();
    event.stopPropagation();
    const icon = el.querySelector('i');
    if (icon.classList.contains('bi-heart')) {
        icon.className = 'bi bi-heart-fill';
        el.style.background = '#ff4d4d';
        el.style.color = 'white';
    } else {
        icon.className = 'bi bi-heart';
        el.style.background = 'white';
        el.style.color = '#ff4d4d';
    }
};

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = totalQty;
}

window.addToCart = function () {
    const activeSizeBtn = document.querySelector('.size-btn.active');
    if (!activeSizeBtn) {
        alert("Please select a size!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const selection = {
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: activeSizeBtn.innerText,
        qty: parseInt(qInput.value)
    };

    const existing = cart.find(item => item.id === selection.id && item.size === selection.size);
    if (existing) {
        existing.qty++;
    } else {
        cart.push(selection);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} (Size: ${selection.size}) added to cart!`);
};

window.buyNow = function () {
    const activeSizeBtn = document.querySelector('.size-btn.active');
    if (!activeSizeBtn) {
        alert("Please select a size!");
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    const buyNowItem = {
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: activeSizeBtn.innerText,
        qty: parseInt(qInput.value)
    };

    localStorage.setItem("buyNowItem", JSON.stringify(buyNowItem));
    window.location.href = "buynow.html";
};
