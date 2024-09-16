document.addEventListener("DOMContentLoaded", function() {
    // Fetch cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the table body and subtotal elements
    const checkoutTableBody = document.getElementById('checkoutTableBody');
    const checkoutSubtotalAmount = document.getElementById('checkout-subtotal-amount');
    const deliveryChargesElement = document.getElementById('delivery-charges');
    const taxesAmountElement = document.getElementById('taxes-amount');
    const grandTotalElement = document.getElementById('grand-total');
    
    // Variables for calculations
    let checkoutSubtotal = 0;
    const deliveryCharges = 200; // Fixed delivery charge
    let taxes = 0;
    let grandTotal = 0;

    // Loop through cart items and add them to the checkout table
    cart.forEach(product => {
        // Create a table row for each product
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>Rs.${product.price.toFixed(2)}</td>
            <td>Rs.${(product.price * product.quantity).toFixed(2)}</td>
        `;
        // Add the row to the table body
        checkoutTableBody.appendChild(row);
        
        // Update the subtotal
        checkoutSubtotal += product.price * product.quantity;
    });

    // Calculate taxes (10% of the subtotal)
    taxes = checkoutSubtotal * 0.10;

    // Calculate grand total
    grandTotal = checkoutSubtotal + deliveryCharges + taxes;

    // Display the values
    checkoutSubtotalAmount.textContent = `Rs.${checkoutSubtotal.toFixed(2)}`;
    deliveryChargesElement.textContent = `Rs.${deliveryCharges.toFixed(2)}`;
    taxesAmountElement.textContent = `Rs.${taxes.toFixed(2)}`;
    grandTotalElement.textContent = `Rs.${grandTotal.toFixed(2)}`;
});






// // .......SHIPPING AND BILLING SECTION.......
 // JavaScript to handle the checkbox functionality
 document.getElementById('same-address').addEventListener('change', function() {
    const isChecked = this.checked;
    const billingFields = document.getElementById('billing-fields');
    if (isChecked) {
        billingFields.style.display = 'none';
        // Copy shipping values to billing fields
        document.getElementById('billing-name').value = document.getElementById('shipping-name').value;
        document.getElementById('billing-address').value = document.getElementById('shipping-address').value;
        document.getElementById('billing-city').value = document.getElementById('shipping-city').value;
        document.getElementById('billing-zip').value = document.getElementById('shipping-zip').value;
        document.getElementById('billing-country').value = document.getElementById('shipping-country').value;
    } else {
        billingFields.style.display = 'block';
    }
});



// Redirect 'Save for Later' button to signup page
document.getElementById('save-for-later').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Adjust this link when you have the signup page
});
