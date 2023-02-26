<script setup>
//The Help Component is stylized Custom also through the Bootstrap Framework
import { reactive } from "vue";
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

// FAQS Obj
const faqs = reactive([
  {
    id: 1,
    question: "Question #1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor quisquam iure.",
    isOpen: false,
  },
  {
    id: 2,
    question: "Question #2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor quisquam iure.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Question #3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor quisquam iure.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Question #4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor quisquam iure.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Question #5",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor quisquam iure.",
    isOpen: false,
  },
]);

//FAQS +
const toggleAccordion = (index) => {
  faqs[index].isOpen = !faqs[index].isOpen;
};

const getAccordionIcon = (index) => {
  return faqs[index].isOpen
    ? "bi bi-dash-square-fill rotate"
    : "bi bi-plus-square-fill";
};

const getAccordionClass = (index) => {
  return faqs[index].isOpen
    ? "accordion-collapse collapse show"
    : "accordion-collapse collapse";
};
</script>
<template>
  <!-- Header and Navbar Components -->
  <Header />
  <Navbar />
  <!-- Cards and FAQS start from container -->
  <div class="container">
    <!-- Cards start from here -->
    <div class="row">
      <div class="col-md-4">
        <div class="card card-luxury">
          <div class="card-body">
            <div class="icon-container">
              <i class="bi bi-envelope-fill">
                <img src="../assets/envelope-at.svg" alt="" />
              </i>
            </div>
            <h3 class="card-title">24/7 Support</h3>
            <p class="card-text">
              Contact us anytime via email for support or any questions you may
              have. We are here to help you.
            </p>
            <button type="button" class="btn btn-outline-primary">
              Email us
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-luxury">
          <div class="card-body">
            <div class="icon-container">
              <i class="bi bi-telephone-fill">
                <img src="../assets/telephone.svg" alt=""
              /></i>
            </div>
            <h3 class="card-title">24/7 Phone Support</h3>
            <p class="card-text">
              If you need immediate assistance, give us a call anytime, day or
              night. Our support team is ready to help.
            </p>
            <button type="button" class="btn btn-outline-primary">
              Contact via phone
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-luxury">
          <div class="card-body">
            <div class="icon-container">
              <i class="bi bi-globe2">
                <img src="../assets/geo-alt-fill.svg" alt=""
              /></i>
            </div>
            <h3 class="card-title">Lorem, ipsum.</h3>
            <p class="card-text">
              456 Warren Rd. Williamstown, NJ 08094, 9704 Rockville Court Bay
              Shore, NY 11706
            </p>
            <button type="button" class="btn btn-outline-primary">
              Come to our office!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Cards end  -->
  <!-- FAQS Start from here -->
  <div id="app" class="faqs-custom-css">
    <h1 class="h1-custom-css">Frequently Asked Questions</h1>
    <div class="accordion" id="accordionExample">
      <div v-for="(faq, index) in faqs" :key="faq.id" class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            @click="toggleAccordion(index)"
            class="accordion-button"
            type="button"
          >
            {{ faq.question }}
            <i :class="getAccordionIcon(index)"></i>
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          :class="getAccordionClass(index)"
          :aria-labelledby="'heading' + index"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FAQS end  -->

  <!-- Footer -->
  <Footer />
</template>

<style scoped>
.accordion-item {
  margin-bottom: 10px;
}

.accordion-button i {
  margin-left: 10px;
  transition: transform 0.2s;
}

.accordion-button i.rotate {
  transform: rotate(45deg);
}
.faqs-custom-css {
  width: 70%;
  margin: 0 auto;
  margin-top: 45px;
}
.h1-custom-css {
  display: flex;
  justify-content: center;
}
.container {
  margin-top: 25px;
}
.card-luxury {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  text-align: center;
  padding: 40px 20px;
  transition: all 0.3s ease-in-out;
}

.card-luxury:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-luxury .icon-container {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background-color: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(82, 113, 203, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.card-luxury .icon-container i {
  font-size: 40px;
  color: #fff;
}

.card-luxury:hover .icon-container {
  transform: scale(1.2);
  box-shadow: 0 0 50px;
}

.card-luxury .card-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2b2b2b;
  transition: all 0.3s ease-in-out;
}

.card-luxury:hover .card-title {
  color: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(82, 113, 203, 1) 100%
  );
}

.card-luxury .card-text {
  font-size: 16px;
  line-height: 1.5;
  color: #777;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;
}

.card-luxury:hover .card-text {
  color: #2b2b2b;
}

.card-luxury .contact-info {
  font-size: 16px;
  line-height: 1.5;
  color: #777;
  margin-top: 30px;
}

.card-luxury .contact-info i {
  margin-right: 10px;
  color: #ffbf00;
}
.btn {
  max-width: fit-content;
}
</style>
