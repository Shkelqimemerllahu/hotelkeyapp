<script setup>
//Login Form is made from HTML and Bootstrap with little custom css.
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();
const errorMessage = ref("");

// Login Function
const login = () => {
  if (username.value === "user" && password.value === "password")
    router.push("/students");
  else {
    //Error Text
    errorMessage.value = "Your username or password is incorrect!";
  }
};
</script>

<template>
  <div
    class="bg-design min-vh-100 d-flex align-items-center justify-content-center"
  >
    <div class="bg-light p-4 rounded-lg" style="max-width: 600px; width: 100%">
      <h1 class="text-center mb-4">Student Information System</h1>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label class="form-label" for="username">Username:</label>
            <input
              class="form-control"
              type="text"
              id="username"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password:</label>
            <input
              class="form-control"
              type="password"
              id="password"
              v-model="password"
              required
            />
          </div>
          <p class="errorMessage-custom-css" v-if="errorMessage">
            {{ errorMessage }}
          </p>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Save your info for later
            </label>
          </div>
          <div>
            <button
              class="btn btn-outline-success"
              type="submit"
              @click="login"
            >
              <img class="img-login" src="../assets/key.png" alt="" />
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  width: 100% !important;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
}
.bg-light {
  border-radius: 20px !important;
}

.bg-design {
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
.img-login {
  width: 20px;
  height: auto;
}
.errorMessage-custom-css {
  color: red;
}
</style>
