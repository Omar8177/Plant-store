let cart = [];

function addToCart(plant, price) {
    // Add item to the cart array
    cart.push({ plant, price });
    
    // Update cart icon with total items
    document.getElementById("cart-icon").textContent = `🛒 ${cart.length}`;
    
    // Disable the button after adding
    event.target.disabled = true;
}

function updateCart() {
    // Get the cart items container
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items
    
    let total = 0;
    
    // Loop through each item in the cart and display it
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<p>${item.plant} - $${item.price}</p>`;
        cartItemsContainer.appendChild(cartItem);
        
        total += item.price;
    });
    
    // Update the total price
    document.getElementById("total-price").textContent = total.toFixed(2);
}

// Ensure the cart is updated when the shopping cart page is loaded
if (document.getElementById("cart-items")) {
    updateCart();
}
