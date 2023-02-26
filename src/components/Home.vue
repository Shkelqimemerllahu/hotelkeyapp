<script setup>
//Home component its made from pure html and css
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <!-- Header and Navbar Component -->
  <Header />
  <Navbar />

  <div class="custom-container">
    <!-- Hero section start from here -->
    <div class="row">
      <div class="col">
        <h1>Faculty</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          delectus aut accusantium nostrum, nemo tempore. Ipsa esse molestias
          veritatis a architecto animi sint veniam, laboriosam nam harum,
          praesentium vero illum?
        </p>
        <a href="#latestarticle" class="button">Read More</a>
      </div>
      <div class="col">
        <div class="card card1">
          <h5>Lorem, ipsum.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="card card2">
          <h5>Lorem, ipsum.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="card card3">
          <h5>Lorem, ipsum.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="card card4">
          <h5>Lorem, ipsum.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
    <!-- Hero section -->
  </div>
  <!-- Latest Article -->
  <div class="latest-article">
    <h2 id="latestarticle">Latest Article</h2>
  </div>
  <!-- Latest Article -->
  <!-- Post Card -->
  <div class="post-container">
    <div class="card-post">
      <div class="card-image">
        <img src="../assets/books1.jpeg" alt="Card 1" />
      </div>
      <div class="card-content">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    <div class="card-post">
      <div class="card-image">
        <img src="../assets/artpic.jpeg" alt="Card 2" />
      </div>
      <div class="card-content">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    <div class="card-post">
      <div class="card-image">
        <img src="../assets/sports team.jpg" alt="Card 3" />
      </div>
      <div class="card-content">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    <div class="card-post">
      <div class="card-image">
        <img src="../assets/hikingteam.jpg" alt="Card 4" />
      </div>
      <div class="card-content">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>

    <div class="card-post">
      <div class="card-image">
        <img src="../assets/books1.jpeg" alt="Card 5" />
      </div>
      <div class="card-content">
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <!-- Post Card -->
  </div>
  <!-- Footer Section -->
  <Footer />
</template>

<style scoped>
.custom-container {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/books.jpg");
  background-size: cover;
  background-position: center;
}
.row {
  display: flex;
  height: 88%;
  align-items: center;
}
h1 {
  color: white;
  font-size: 100px;
}
p {
  color: white;
  font-size: 11px;
  line-height: 15px;
}
.button {
  width: 180px;
  color: #000;
  font-size: 12px;
  padding: 12px 0;
  background: #fff;
  border: 0;
  border-radius: 20px;
  outline: none;
  margin-top: 30px;
}
.card {
  width: 200px;
  height: 230px;
  display: inline-block;
  border-radius: 10px;
  padding: 15px 25px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 10px 15px;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s;
}

.card1 {
  background-image: url("../assets/sports team.jpg");
}
.card2 {
  background-image: url("../assets/hikingteam.jpg");
}
.card3 {
  background-image: url("../assets/books1.jpeg");
}
.card4 {
  background-image: url("../assets/sports team.jpg");
}
.card:hover {
  transform: translateY(-10px);
}
h5 {
  color: white;
  text-shadow: 0 0 5px #999;
}
.card p {
  text-shadow: 0 0 15px black;
  font-size: 8px;
}
.latest-article {
  background-color: #f8f8f8;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.latest-article h2 {
  font-size: 36px;
  color: #333;
  margin: 0;
}
.post-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
.card-post {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px px 20px rgba(0, 0, 0, 0.2);
  margin: 20px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  transform: scale(1);
}
.card-post:hover {
  transform: scale(1.1);
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 16px;
  margin-bottom: 20px;
}

.button {
  display: inline-block;
  background-color: #e6b800;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #ffcc33;
}

.post-container {
  background-color: #f2f2f2;
  padding: 50px;
}

.card-post {
  width: 300px;
  height: 400px;
  position: relative;
}

.card-post:before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border: 10px solid #e6b800;
  z-index: -1;
}

.card-post:nth-child(2n):before {
  border-color: #cc9900;
}

.card-post:nth-child(3n):before {
  border-color: #996600;
}

.card-image {
  position: relative;
  overflow: hidden;
  height: 60%;
}

.card-image:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.3);
}

.card-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out;
}

.card-image:hover img {
  transform: translate(-50%, -60%);
}

.card-content {
  position: relative;
  z-index: 1;
  height: 40%;
}

.card-content:before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: 10px;
  background-color: #e6b800;
  z-index: -1;
}

.card-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-content p {
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.5;
  color: black;
}

.button {
  font-size: 20px;
  padding: 15px 30px;
  letter-spacing: 1px;
}
@media only screen and (max-width: 600px) {
  .card {
    display: none;
  }
}
@media only screen and (max-width: 1000px) {
  .card {
    display: none;
  }
}
</style>
