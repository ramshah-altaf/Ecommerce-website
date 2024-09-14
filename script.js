
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
} 

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
} 



// Product images changing function,...
window.onload = function() {
    let MainImg = document.getElementById("mainImg");
    let SmallImg = document.getElementsByClassName("smImg");

   // Loop through each small image and attach click events
    for (let i = 0; i < SmallImg.length; i++) {
        SmallImg[i].onclick = function() {
            MainImg.src = SmallImg[i].src;
        }
    }
}




// ..........SHOPPING CART FUNCTIONALITY....
// Initialize cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(productId, productName, productPrice) {
    // Convert productId and productPrice to proper types
    const product = { id: parseInt(productId, 10), name: productName, price: parseFloat(productPrice), quantity: 1 };

    // Check if product already in cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save to local storage
    alert(`${productName} added to cart!`);
}

// Function to handle button click
function handleAddToCartClick() {
    const productId = this.getAttribute('data-id');
    const productName = this.getAttribute('data-name');
    const productPrice = this.getAttribute('data-price');

    addToCart(productId, productName, productPrice);
}

// Event listener for "Add to Cart" button
const addToCartBtn = document.getElementById('add-to-cart-btn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', handleAddToCartClick);
} else {
    console.error('Add to Cart button not found'); // Error message if button is missing
}


// Function to display cart items from local storage
function displayCartItems() {
    const cartTableBody = document.getElementById('cartTableBody');
    if (!cartTableBody) return; // Ensure cartTableBody exists before continuing

    cartTableBody.innerHTML = ''; // Clear the cart table first

    cart.forEach(product => {
        cartTableBody.innerHTML += `
            <tr>
                <td>
                    <button class="remove-btn" data-id="${product.id}">
                        Remove
                    </button>
                </td>
                <td><img src="images/product-imgs/${product.id}.png" alt="${product.name}" width="50"></td>
                <td>${product.name}</td>
                <td>Rs.${product.price}</td>
                <td><input type="number" value="${product.quantity}" min="1" class="quantity-input" data-id="${product.id}"></td>
                <td>Rs.${product.price * product.quantity}</td>
            </tr>
        `;
    });

    // Attach event listeners for "Remove" buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            removeFromCart(productId); // Pass the correct productId to the function
        });
    });

    // Attach event listeners for quantity inputs
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = this.getAttribute('data-id');
            const newQuantity = this.value;
            updateQuantity(productId, newQuantity);
        });
    });
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== parseInt(productId, 10));
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCartItems(); // Refresh cart display
}

// Function to update the quantity of a product
function updateQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === parseInt(productId, 10));
    if (product) {
        product.quantity = parseInt(newQuantity, 10);
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
        displayCartItems(); // Refresh cart display
    }
}

// Call displayCartItems on page load
window.onload = displayCartItems;
