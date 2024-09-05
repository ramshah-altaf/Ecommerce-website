
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



// ..........SHOPPING CART FUNCTIONALITY 
let cart = [
    { id: 1, name: 'Green frock', price: 1000, quantity: 1, image: 'images/product-imgs/i1.png' },
    { id: 2, name: 'Yellow frock', price: 900, quantity: 1, image: 'images/product-imgs/i2.jpg' },
    { id: 3, name: 'Red frock', price: 1300, quantity: 1, image: 'images/product-imgs/i3.jpg' }
  ];
  

  function renderCart() {
    const cartTableBody = document.querySelector('tbody');
    cartTableBody.innerHTML = ''; // Clear the current items
  
    cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><a href="#" onclick="removeFromCart(${item.id})"><i class="fas fa-times-circle"></i></a></td>
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>Rs. ${item.price}</td>
        <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)"></td>
        <td>Rs. ${item.price * item.quantity}</td>
      `;
      cartTableBody.appendChild(row);
    });
  
    updateCartSummary();
  }
  renderCart();
   

//   c) Update Quantity.....
function updateQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
      product.quantity = Number(newQuantity);
      renderCart(); // Re-render the cart after updating
    }
  }

  
// d) Remove Item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart(); // Re-render the cart after removing the item
  }

  
//   e) Update Cart Totals....
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 0; // Set your shipping price or logic here
    const total = subtotal + shipping;
  
    document.querySelector('#subtotal td:last-child').textContent = `Rs. ${subtotal}`;
    document.querySelector('#cart-add td:last-child strong').textContent = `Rs. ${total}`;
  }
  

// Connecting to Checkout Button.....
document.querySelector('#checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      console.log('Proceeding to checkout with the following items:', cart);
      // You can redirect to the checkout page or handle payment here
    //   window.location.href = 'checkout.html'; // Example
    }
  });
  

  
