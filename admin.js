// admin.js

// Function to handle product addition
document.getElementById('add-product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the product details from the form
    let productName = document.getElementById('product-name').value;
    let productPrice = document.getElementById('product-price').value;

    // Add product to the table (for demonstration purposes)
    let table = document.getElementById('product-table').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    newRow.insertCell(0).textContent = productName;
    newRow.insertCell(1).textContent = `Tsh${parseFloat(productPrice).toFixed(2)}`;
    newRow.insertCell(2).innerHTML = `
        <button onclick="editProduct('${productName}')">Edit</button>
        <button onclick="deleteProduct('${productName}')">Delete</button>
    `;

    // Clear the form inputs
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
});

// Function to edit a product (stub)
function editProduct(productName) {
    alert(`Edit ${productName}`);
    // Add logic to edit product details
}

// Function to delete a product
function deleteProduct(productName) {
    if (confirm(`Are you sure you want to delete ${productName}?`)) {
        let rows = document.getElementById('product-table').rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].cells[0].textContent === productName) {
                rows[i].remove();
                break;
            }
        }
    }
}
// View Order Details (This is just a placeholder, could be dynamic or open a modal with detailed order info)
function viewOrderDetails(orderId) {
    alert(`Viewing details for Order ID: ${orderId}`);
    // Implement logic to show more detailed information (e.g., a modal or page with order details)
}

// Change Order Status (Mark as Shipped or any other status)
function changeOrderStatus(orderId) {
    const statusCell = document.querySelector(`#orders-table tr td:nth-child(6):contains(${orderId})`);
    if (statusCell) {
        // In a real scenario, this should update the order status in a database
        statusCell.textContent = 'Shipped'; // Change the status to "Shipped"
        alert(`Order ID: ${orderId} has been marked as shipped.`);
    }
}
let cart = [];

function updateCart() {
    const cartContainer = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    const emptyMessage = document.querySelector('.empty-message');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        totalPriceElement.style.display = 'none';
        checkoutBtn.style.display = 'none';
    } else {
        emptyMessage.style.display = 'none';
        totalPriceElement.style.display = 'block';
        checkoutBtn.style.display = 'block';
        
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        
        totalPriceElement.innerHTML = `Total: <span>Tsh${total.toLocaleString()}</span>`;
    }
}

// Example: Add product to cart
function addToCart(name, price) {
    cart.push({ name, price, quantity: 1 });
    updateCart();
}

// Example: Checkout function
function checkout() {
    alert('Proceeding to checkout...');
    // Add your checkout process here (e.g., redirect to another page)
}

// Initialize cart when page loads
updateCart();
