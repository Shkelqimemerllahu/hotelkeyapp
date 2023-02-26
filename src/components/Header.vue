<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
    <a class="navbar-brand"><img src="../assets/faculty-logo.jpg" alt="" /></a>
    <p class="p-inline">
      <RouterLink type="button" class="btn btn-light" to="/">Logout</RouterLink>
    </p>
  </nav>
</template>
<style scoped>
nav img {
  margin-left: 7px;
  width: 70px;
  border-radius: 500px;
}
</style>
