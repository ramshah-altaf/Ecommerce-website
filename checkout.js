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

