<script setup>
</script>

<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link">Home</router-link>
            <!-- <router-link to="/users" class="nav-link">Users</router-link> -->
          </div>
        </div>
      </div>
    </nav>

    <div class="mt-4">
      <router-view />
    </div>
  </div>
</template>

<style>
.header {
  width: 80%;
  margin: auto;
}
.navbar-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
