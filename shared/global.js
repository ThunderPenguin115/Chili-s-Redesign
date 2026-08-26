let globalCart = [];

function theme() {
    const root = document.documentElement;

    if (root.classList.contains("dark-theme")) {
        // Switch to light
        root.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Switch to dark
        root.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("themeSwitch");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-theme");
    }

    // Make button work
    if (themeButton) {
        themeButton.addEventListener("click", theme);
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const cartButton = document.getElementById("cart");
    const sidebar = document.getElementById("cart-sidebar");
    const closeButton = document.getElementById("close-cart");
    const checkoutButton = document.getElementById("go-to-checkout");

    // Open cart
    if (cartButton && sidebar) {
        cartButton.addEventListener("click", function () {
            sidebar.classList.add("open");
            displaySideCart();
        });
    }

    // Close cart
    if (closeButton && sidebar) {
        closeButton.addEventListener("click", function () {
            sidebar.classList.remove("open");
        });
    }

    // Go to checkout
    if (checkoutButton) {
        checkoutButton.addEventListener("click", function () {
            window.location.href = "/pages/Checkout/";
        });
    }

    displaySideCart();
});



function displaySideCart() {

    const container = document.getElementById("side-cart-items");
    const totalElement = document.getElementById("side-cart-total");

    if (!container) {
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cartStorage")) || [];

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.textContent = "Total: $0.00";
        return;
    }

    let total = 0;

    cart.forEach(function(item) {

        let subtotal = item.price * item.quantity;

        total += subtotal;

        container.innerHTML += `
            <div class="side-cart-item">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <img class="checkoutImage" src="${item.Image}" alt="${item.name}">
                
            </div>
        `;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function addCart(itemName) {
    console.log("Adding:", itemName);

    // Find the item in menuItems
    const item = menuItems.find(function(menuItem) {
        return menuItem.name === itemName;
    });

    if (!item) {
        console.log("Item not found:", itemName);
        return;
    }

    // Check if item is already in cart
    const existingItem = globalCart.find(function(cartItem) {
        return cartItem.name === itemName;
    });

    if (existingItem) {
        existingItem.quantity++;
    } else {
        globalCart.push({
            name: item.name,
            menu: item.menu,
            price: item.price,
            quantity: 1,
            Image: item.Image,
            description: item.description
        });
    }

    // Save cart so Checkout can access it
    setCart();
    const sidebar = document.getElementById("cart-sidebar");

if (sidebar && sidebar.classList.contains("open")) {
    displaySideCart();
}

    console.log("Cart:", globalCart);
}