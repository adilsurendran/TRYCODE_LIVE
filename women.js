let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");

updateCartCount();

/* -----------------------
   UPDATE CART COUNT
----------------------- */
function updateCartCount() {
  cartCount.innerText = cart.length;
}

/* -----------------------
   SIZE BUTTON ACTIVE
----------------------- */
document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const parent = this.closest(".size-options");

    parent.querySelectorAll(".size-btn").forEach(b => {
      b.classList.remove("active");
    });

    this.classList.add("active");
  });
});

/* -----------------------
   GET PRODUCT DETAILS
----------------------- */
function getProductDetails(card) {

  const name = card.querySelector("h6").innerText;
  const priceElement = card.querySelector(".product-price");
  const image = card.querySelector("img").src;
  const selectedSizeBtn = card.querySelector(".size-btn.active");

  if (!selectedSizeBtn) {
    alert("Please select size!");
    return null;
  }

  if (!priceElement) {
    alert("Price not found!");
    return null;
  }

  const price = priceElement.innerText;

  return {
    name: name,
    price: price,
    size: selectedSizeBtn.innerText,
    image: image
  };
}

/* -----------------------
   ADD TO CART
----------------------- */
document.querySelectorAll(".addCart").forEach(button => {
  button.addEventListener("click", function () {

    const card = this.closest(".card-custom");
    const product = getProductDetails(card);

    if (!product) return;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    /* RESET SIZE AFTER ADD */
    card.querySelectorAll(".size-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    alert("Added to Cart!");
  });
});

/* -----------------------
   BUY NOW
----------------------- */
document.querySelectorAll(".buyNow").forEach(button => {
  button.addEventListener("click", function () {

    const card = this.closest(".card-custom");
    const product = getProductDetails(card);

    if (!product) return;

    localStorage.setItem("buyNowProduct", JSON.stringify(product));

    window.location.href = "buynow.html";
  });
});

/* -----------------------
   SEARCH SYSTEM
----------------------- */
if (searchInput) {
  searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card-custom");
    let found = false;

    cards.forEach(card => {

      const name = card.querySelector("h6").innerText.toLowerCase();
      const column = card.closest(".col-md-3");

      if (name.includes(value)) {
        column.style.display = "block";
        found = true;
      } else {
        column.style.display = "none";
      }

    });

    if (!found && value !== "") {
      alert("No products found!");
    }

  });
}

/* -----------------------
   BACK BUTTON
----------------------- */
function goBack() {
  window.history.back();
}