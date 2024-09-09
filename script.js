
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



// ......................
let MainImg = document.getElementById("mainImg");
    let SmallImg = document.getElementsByClassName("smImg");

    SmallImg[0].onclick = function(){
        MainImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        MainImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        MainImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        MainImg.src = SmallImg[3].src;
    }


// ..........SHOPPING CART FUNCTIONALITY.....
document.addEventListener('DOMContentLoaded', function() {
  let cart = [];

  function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1; // If the item is already in the cart, increase the quantity
    } else {
      // If the item is not in the cart, add it
      cart.push({ id, name, price, quantity: 1, image });
    }

    renderCart(); // Re-render the cart with the updated items
  }

  function renderCart() {
    const cartTableBody = document.querySelector('#cartTableBody');
    console.log(cartTableBody); // Check if this logs the correct element or null

    if (!cartTableBody) {
      console.error('Cart table body not found');
      return;
    }

    cartTableBody.innerHTML = ""; // Clear the current items to prevent duplicate entries

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

    updateCartSummary(); // Ensure this updates the cart total
  }

  function updateQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
      product.quantity = Number(newQuantity);
      renderCart(); // Re-render the cart after updating
    }
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart(); // Re-render the cart after removing the item
  }

  function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 0; // Set your shipping price or logic here
    const total = subtotal + shipping;

    document.querySelector('#subtotal td:last-child').textContent = `Rs. ${subtotal}`;
    document.querySelector('#cart-add td:last-child strong').textContent = `Rs. ${total}`;
  }

  // Attach event listener to button
  document.getElementById('add-to-cart-btn').addEventListener('click', function() {
    addToCart(1, 'Green frock', 1000, 'images/product-imgs/i1.png');
  });
});


// Event Listener for Checkout Button
// document.querySelector('#adtocart').addEventListener('click', function() {
//   if (cart.length === 0) {
//     alert('Your cart is empty!');
//   } else {
//     console.log('Proceeding to checkout with the following items:', cart);
//     // You can redirect to the checkout page or handle payment here
//     // window.location.href = 'checkout.html'; // Example
//   }
// });

  


//   // g) Creating local backup of cart items.....
//   // 1.Add Item to Cart:
//   function addToCart(productId, quantity) {
//     const userId = 1; // Replace with actual user ID from your authentication system

//     fetch('/cart.php', {
//         method: 'POST',
//         body: new URLSearchParams({
//             action: 'add',
//             user_id: userId,
//             product_id: productId,
//             quantity: quantity
//         }),
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             console.log('Product added to cart');
//             renderCart(); // Update the cart display
//         }
//     });
// }


  
