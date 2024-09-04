<?php
include 'C:\xampp\htdocs\WEBSITE\Ecommerce-website\db_connect.php';

// Get the product ID from the URL
$product_id = isset($_GET['id']) ? $_GET['id'] : 1;

// Fetch product data from the database
$sql = "SELECT * FROM products WHERE id = $product_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
} else {
    echo "Product not found.";
    exit;
}
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
        <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
        <a href="#" id="close"><i class="fas fa-times"></i></a>
      </ul>
    </div>
    <div id="mobile">
      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      <i id="bar" class="fas fa-outdent"></i>
    </div>
   </section>
      <!-- DETAIL SECTION -->
       <section id="proDetail">
        <!-- <div class="sig-pro-img">
            <img src="images/product-imgs/i1.png" alt="" id="mainImg" width="100%" >
            <div class="sm-img-grp">

                <div class="sm-img-col">
                    <img src="images/product-imgs/i1.png" alt="" class="smImg" width="100%" >
                </div>

                <div class="sm-img-col">
                    <img src="images/product-imgs/i2.jpg" alt="" class="smImg" width="100%" >
                </div>

                <div class="sm-img-col">
                    <img src="images/product-imgs/i3.jpg" alt="" class="smImg" width="100%" >
                </div>

                <div class="sm-img-col">
                    <img src="images/product-imgs/i4.jpg" alt="" class="smImg" width="100%" >
                </div>
            
            </div>
        </div> -->
        
        <div class="sig-pro-img">
          <?php
            $images = explode(',', $row['images']);
            $mainImage = $images[0]; // Assuming the first image is the main image
          ?>
          <img src="images/product-imgs/<?php echo $mainImage; ?>" alt="" id="mainImg" width="100%">

          <div class="sm-img-grp">
            <?php
            foreach ($images as $image) {
              echo '<div class="sm-img-col">';
              echo '<img src="images/product-imgs/'.$image.'" alt="" class="smImg" width="100%">';
              echo '</div>';
            }
            ?>
          </div>
        </div>



        
        <div class="sig-pro-details">
          <h6>Home/<?php echo $row['catagory']; ?></h6>
          <h4><?php echo $row['name']; ?></h4>
          <h3>Rs.<?php echo $row['price']; ?></h3>
          <select>
            <option>Select size</option>
            <option>premature</option>
            <option>0</option>
            <option>1</option>
          </select>
          <input type="number" value="1">
          <button type="button">Add to cart</button>
          <h3>Product details</h3>
          <span><?php echo $row['description']; ?></span>
        </div>
       </section>

       <!-- .....DISPLAY CARD SECTION -->
       <section id="display">
        <h2>Featured Products</h2> 
        <p>Summer Collect New Modern Designs</p>

        <div class="dis-box">
            <div class="dis-card">
               <img src="images/cloth2.png" alt="">
               <div class="des">
                <h3>Maroon Frock</h3>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4>Rs.1000</h4>
               </div>
               <a href="#"><i class="fas fa-cart-shopping" id="cart"></i></a>
            </div>

            <div class="dis-card">
              <img src="images/cloth2.png" alt="">
              <div class="des">
               <h3>Maroon Frock</h3>
               <div class="star">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <h4>Rs.1000</h4>
              </div>
              <a href="#"><i class="fas fa-cart-shopping" id="cart"></i></a>
            </div>
            
            <div class="dis-card">
              <img src="images/cloth2.png" alt="">
              <div class="des">
               <h3>Maroon Frock</h3>
               <div class="star">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
               </div>
               <h4>Rs.1000</h4>
              </div>
              <a href="#"><i class="fas fa-cart-shopping" id="cart"></i></a>
            </div>

        </div>
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
      
   <script>
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
   </script>
    
    <script src="script.js"></script>
</body>
</html>