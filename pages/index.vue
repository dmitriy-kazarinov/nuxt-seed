<template>
  <section class="container">
    <div>
      <AppHeader/>
      <logo/>
      <h1 class="title is-1">
        {{title}}
      </h1>
      <h2 class="subtitle is-2">
        Universal Vue.js Application
      </h2>
      <div class="notification">
        <p class="tag is-black">Counter from Vuex store = {{counter}}</p>
        <br />
        <button v-on:click="handleIncrement()">Increment</button>
      </div>
      <div class="content">
        <p>Users list from Vuex</p>
        <ul v-for="user in users">
          <li>{{user.name}}</li>
        </ul>
      </div>
      <nuxt-link class="button is-primary" to="/about">Go to About page</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import AppHeader from '~/components/AppHeader.vue'
import { mapState } from 'vuex'
import axios from 'axios'
// get test data
const PROJECTS_DATA = 'https://jsonplaceholder.typicode.com/users'

export default {
  async fetch ({ store }) {
    const response = await axios.get(PROJECTS_DATA)
    store.commit('setUsers', response.data)
  },
  data () {
    return {
      title: 'nuxt-seed'
    }
  },
  methods: {
    handleIncrement () {
      this.$store.commit('incrementCounter')
    }
  },
  components: {
    Logo,
    AppHeader
  },
  mounted () {
    console.info(this.counter)
  },
  computed: {
    ...mapState([
      'counter',
      'users'
    ])
  }
}
</script>
