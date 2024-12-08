// Initialize the cart from localStorage (if any)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(name, price) {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        // Item exists, increase the quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // New item, add to the cart
        cart.push({ name, price, quantity: 1 });
    }

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally update the cart UI on the home page (this is if needed for the homepage)
    alert(`${name} added to cart!`);
}

// Function to update cart display on the cart page
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    const emptyMessage = document.querySelector('.empty-message');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartItemsList = document.getElementById('cart-items');

    // Clear existing cart items
    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        totalPriceElement.style.display = 'none';
        checkoutBtn.style.display = 'none';
    } else {
        emptyMessage.style.display = 'none';
        totalPriceElement.style.display = 'block';
        checkoutBtn.style.display = 'block';

        let total = 0;
        // Loop through cart and display each item
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Tsh ${item.price} x ${item.quantity}`;
            cartItemsList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        totalPriceElement.innerHTML = `Total: Tsh ${total.toLocaleString()}`;
    }
}

// Function to handle checkout process
function checkout() {
    // Step 1: Simple Confirmation (Simulating a real-world checkout flow)
    const confirmation = confirm('Are you sure you want to proceed to checkout?');

    if (confirmation) {
        // Step 2: Optionally, you could redirect to a payment gateway or a checkout page here
        // For now, just display a thank you message and clear the cart

        alert('Thank you for your purchase! Your order will be processed soon.');

        // Clear the cart
        localStorage.removeItem('cart');
        cart = [];

        // Update the cart display (it should be empty now)
        updateCartDisplay();
    } else {
        alert('You have canceled the checkout.');
    }
}

// Initialize the cart display on the cart page
if (document.getElementById('cart-items')) {
    updateCartDisplay();
}
