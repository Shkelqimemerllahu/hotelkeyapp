<script setup>
//Navbar Component
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="custom-menu">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/home" class="btn btn-outline-light">Home</RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/students" class="btn btn-outline-light" href="#"
            >Students
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="btn btn-outline-light" to="/archive"
            >Archive
          </RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="btn btn-outline-light" to="/help">Help</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.btn {
  color: white;
  border: none;
}
.navbar-custom {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  display: flex;
  justify-content: center;
}
.navbar-custom li {
  margin-left: 10px;
}
@media only screen {
}
</style>
