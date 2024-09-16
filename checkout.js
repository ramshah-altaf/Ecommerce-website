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



// Scrolling to paymen t section 
document.getElementById('continue-to-payment').addEventListener('click', function() {
    // Gather form data
    const formData = new FormData(document.getElementById('shipping-form'));

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_checkout.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Show a success alert
            alert('Address information saved successfully.');

            // Navigate to the payment section
            document.getElementById('payment-section').scrollIntoView({ behavior: 'smooth' });
        } else {
            // Show an error alert
            alert('An error occurred while saving the address information.');
        }
    };

    // Send the form data
    xhr.send(formData);
});






// REVIEW SECTION...........
document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the delivery date
    function calculateDeliveryDate() {
      const today = new Date();
      const deliveryDate = new Date(today.setDate(today.getDate() + 7)); // Add 7 days
      return deliveryDate.toLocaleDateString(); // Format the date
    }

    // Function to calculate the grand total (fetch from your checkout summary)
    function calculateGrandTotal() {
      const subtotal = parseFloat(document.getElementById('checkout-subtotal-amount').innerText.replace('Rs.', ''));
      const deliveryCharges = parseFloat(document.getElementById('delivery-charges').innerText.replace('Rs.', ''));
      const taxes = parseFloat(document.getElementById('taxes-amount').innerText.replace('Rs.', ''));
      return subtotal + deliveryCharges + taxes;
    }

    // Set the calculated values to the review section
    document.getElementById('review-grand-total').innerText = `Rs.${calculateGrandTotal().toFixed(2)}`;
    document.getElementById('delivery-date').innerText = calculateDeliveryDate();
  });






//  CONFIRMATION PAGE.....
