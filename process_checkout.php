<?php
// Include the database connection file
include 'C:\xampp\htdocs\WEBSITE\Ecommerce-website\db_connect.php';

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Prepare and bind parameters
    $stmt = $conn->prepare("INSERT INTO orders (shipping_name, shipping_address, shipping_city, shipping_zip, shipping_country, billing_name, billing_address, billing_city, billing_zip, billing_country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $shipping_name, $shipping_address, $shipping_city, $shipping_zip, $shipping_country, $billing_name, $billing_address, $billing_city, $billing_zip, $billing_country);

    // Retrieve and sanitize input data
    $shipping_name = $_POST['shipping_name'];
    $shipping_address = $_POST['shipping_address'];
    $shipping_city = $_POST['shipping_city'];
    $shipping_zip = $_POST['shipping_zip'];
    $shipping_country = $_POST['shipping_country'];

    // Check if the "same_address" checkbox is checked
    if (isset($_POST['same_address'])) {
        // If checked, use shipping information for billing
        $billing_name = $shipping_name;
        $billing_address = $shipping_address;
        $billing_city = $shipping_city;
        $billing_zip = $shipping_zip;
        $billing_country = $shipping_country;
    } else {
        // Use the separate billing address provided by the user
        $billing_name = $_POST['billing_name'];
        $billing_address = $_POST['billing_address'];
        $billing_city = $_POST['billing_city'];
        $billing_zip = $_POST['billing_zip'];
        $billing_country = $_POST['billing_country'];
    }

    // Execute the statement
    if ($stmt->execute()) {
        echo "Order information saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>

