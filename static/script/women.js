document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const subFilterDiv = document.getElementById("subFiltersDiv");
  const subFilterContent = document.getElementById("subFiltersContent");
  const products = document.querySelectorAll(".product-col");
  const searchInput = document.getElementById("searchInput");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const cartCountEl = document.getElementById("cart-count");

  // Theme Logic
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
  const toggleBtn = document.getElementById("themeToggle");

  if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light-theme");
      if (themeIcon) themeIcon.className = "bi bi-sun-fill";
    } else {
      body.classList.remove("light-theme");
      if (themeIcon) themeIcon.className = "bi bi-moon-stars-fill";
    }
  }

  applyTheme(localStorage.getItem("theme"));

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newTheme = body.classList.contains("light-theme") ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  }

  let currentCategory = "all";
  let currentSubCategory = "all";

  const subCategoryMap = {
    all: [],
    dress: ["Midi", "Gowns", "Hats"],
    top: ["Shirts", "Crop", "Tops"],
    party: ["Gowns", "Tops"],
    casual: ["Pants", "Watches"]
  };

  // Initialize Cart Count
  updateCartCount();

  // 1. MAIN CATEGORY FILTER
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      currentCategory = this.getAttribute("data-filter");
      currentSubCategory = "all"; // Reset sub-category on main change

      renderSubFilters(currentCategory);
      filterProducts();
    });
  });

  // 2. RENDER SUB FILTERS
  function renderSubFilters(category) {
    if (category === "all") {
      subFilterDiv.style.display = "none";
      return;
    }

    const subs = subCategoryMap[category] || [];
    if (subs.length === 0) {
      subFilterDiv.style.display = "none";
      return;
    }

    subFilterDiv.style.display = "block";
    subFilterContent.innerHTML = `<button class="filter-btn sub-filter-btn active" data-sub="all">All ${category}</button>`;

    subs.forEach(sub => {
      const btn = document.createElement("button");
      btn.className = "filter-btn sub-filter-btn";
      btn.innerText = sub;
      btn.setAttribute("data-sub", sub.toLowerCase());
      subFilterContent.appendChild(btn);
    });

    // Add event listeners to new sub-filter buttons
    const subBtns = subFilterContent.querySelectorAll(".sub-filter-btn");
    subBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        subBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        currentSubCategory = this.getAttribute("data-sub");
        filterProducts();
      });
    });
  }

  // 3. FILTER PRODUCTS
  function filterProducts() {
    const desktopSearch = searchInput ? searchInput.value.toLowerCase() : "";
    const mobileSearch = mobileSearchInput ? mobileSearchInput.value.toLowerCase() : "";
    const searchValue = desktopSearch || mobileSearch;

    products.forEach(product => {
      const category = product.getAttribute("data-category");
      const subCategory = product.getAttribute("data-sub-category");
      const name = product.querySelector("h6").innerText.toLowerCase();

      const matchesCategory = currentCategory === "all" || category === currentCategory;
      const matchesSub = currentSubCategory === "all" || subCategory === currentSubCategory;
      const matchesSearch = name.includes(searchValue);

      if (matchesCategory && matchesSub && matchesSearch) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // 4. SEARCH SYSTEM
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      if (mobileSearchInput) mobileSearchInput.value = this.value;
      filterProducts();
    });
  }
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", function () {
      if (searchInput) searchInput.value = this.value;
      filterProducts();
    });
  }

  // 5. CART & BUY NOW LOGIC
  document.addEventListener("click", function (e) {
    // Add to Cart
    if (e.target.closest(".cartBtn")) {
      const card = e.target.closest(".card-custom");
      const product = getProductInfo(card);
      openModal(product, "cart");
    }

    // Buy Now
    if (e.target.closest(".buyNowBtn")) {
      const card = e.target.closest(".card-custom");
      const product = getProductInfo(card);
      openModal(product, "buy");
    }

    // Wishlist
    if (e.target.closest(".wishlist-btn")) {
      const btn = e.target.closest(".wishlist-btn");
      btn.classList.toggle("active");
      const icon = btn.querySelector("i");
      if (btn.classList.contains("active")) {
        icon.className = "fa-solid fa-heart";
        btn.style.color = "#ff4d4d";
      } else {
        icon.className = "fa-regular fa-heart";
        btn.style.color = "#fff";
      }
    }
  });

  function getProductInfo(card) {
    return {
      name: card.querySelector("h6").innerText,
      price: card.querySelector(".product-price").innerText.replace("₹", ""),
      image: card.querySelector("img").src
    };
  }

  // 6. MODAL & STORAGE
  let currentModalProduct = null;
  let modalMode = "cart"; // "cart" or "buy"
  const productModal = new bootstrap.Modal(document.getElementById('productModal'));

  function openModal(product, mode) {
    currentModalProduct = product;
    modalMode = mode;
    document.getElementById('modalProductName').innerText = product.name;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('qtyInput').value = 1;
    productModal.show();
  }

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.getElementById('modalAddCart').addEventListener('click', function () {
    const sizeBtn = document.querySelector('.size-btn.active');
    if (!sizeBtn) {
      alert("Please select a size");
      return;
    }

    const selection = {
      ...currentModalProduct,
      size: sizeBtn.innerText,
      qty: parseInt(document.getElementById('qtyInput').value)
    };

    if (modalMode === "cart") {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(selection);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert("Added to cart!");
    } else {
      localStorage.setItem("buyNowItem", JSON.stringify(selection));
      window.location.href = "buynow.html";
    }
    productModal.hide();
  });

  function updateCartCount() {
    if (!cartCountEl) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountEl.innerText = cart.length;
  }
});