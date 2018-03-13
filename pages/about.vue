<template>
  <section class="container">
    <div>
      <AppHeader/>
      <div class="about">
        Nuxt seed for development.
      </div>
      <p>
        <nuxt-link class="button is-primary" to="/">Go to Home page</nuxt-link>
      </p>
    </div>
  </section>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>
