
<?php
// Include the database connection
include 'C:\xampp\htdocs\WEBSITE\Ecommerce-website\db_connect.php';

// Fetch product data
$sql = "SELECT * FROM products";
$result = $conn->query($sql);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/36f07399b2.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <section id="header">
    <a href="#"><img id="logo" src="images\logo.png" alt="logo"></a>

    <div>
      <ul id="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a class="active" href="shop.php">Shop</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i><span id="cart-count">0</span> <!-- Counter Element --></a></li>
        <a href="#" id="close"><i class="fas fa-times"></i></a>
      </ul>
    </div>
    <div id="mobile">
      <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
      <span id="cart-count-small">0</span>
      <i id="bar" class="fas fa-outdent"></i>
    </div>
   </section>

       <!-- ......TOP BANNER SECTION -->
      <section id="shop-banner">
        <img src="images/shop-banner5.png" alt="">
      </section>

      <!-- .....DISPLAY CARD SECTION -->   
       <section id="display">
         <div class="dis-box">
           <?php while($row = $result->fetch_assoc()) { ?>
          
          <div class="dis-card">
            <?php
              $images = explode(',', $row['images']);
              $mainImage = $images[1]; // Assuming the first image is the main image
            ?>
             <a href="product.php?id=<?php echo $row['id']; ?>"><img src="images/product-imgs/<?php echo $mainImage; ?>" alt="" id="mainImg" width="100%"></a>

            <div class="des">
            <a href="product.php?id=<?php echo $row['id']; ?>"><h3><?php echo $row['name']; ?></h3></a>
               <div class="star">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <h4>Rs.<?php echo $row['price']; ?></h4>
            </div>
           
            
          </div>
          <?php } ?>
          
        </div>
      </section>

       <section id="pagination">
         <a href="#">1</a>
         <a href="#">2</a>
         <a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
       </section>

      <!-- .....NEWS LETTER SECTION -->
       <section id="newsletter" >
          <div class="news-text">
            <h3>Sign Up For Newsletters</h3>
            <p>Get email updates about our latest collection and <span>special offers.</span></p>
          </div>
          <div class="form">
            <input type="text" placeholder="Enter your email address" >
            <button>Sign Up</button>
          </div>
       </section>

       <!-- .....FOOTER SECTION -->
       <footer>
        <div class="footer-container">
          
        <div class="abo-con">
          <div class="footer-about">
            <h3>About Us</h3>
            <p>At <span>Rinky Tinks</span> , we’re passionate about delivering the best baby clothes for your newborns and toddlers. Our mission is to....</p>
          </div>

          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p><span>Email:</span> <a href="mailto:ramshahaltafkhan@gmail.com">ramshahaltafkhan@gmail.com</a></p> 
            <p><span>Phone:</span> <a href="tel:03365339620">0336-5339620</a></p>
            <p><span>Location:</span> <a href="#">Islamabad, Pakistan.</a></p>
          </div>
        </div>

          <!-- Quick Links Section -->
          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
      
          <!-- Social Media Links -->
          <div class="footer-social">
            <h3>Follow Us</h3>
           
              <a href="#" target="_blank"> <i class="fa-brands fa-square-facebook"></i></a>
              <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
          
          </div>
        </div>
      
        <div class="footer-bottom">
          <p>&copy; 2024 Rinky Tinks. All Rights Reserved.</p>
          <p>Designed by Ramshah Altaf Khan.</p>
        </div>
      </footer>
      
   
    
    <script src="script.js"></script>
</body>
</html>