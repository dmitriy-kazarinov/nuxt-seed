<template>
  <nav class="nav">
    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-left nav-menu">
      <nuxt-link class="nav-item" to="/">Home</nuxt-link>
      <nuxt-link class="nav-item" to="/about">About</nuxt-link>
    </div>
  </nav>
</template>
