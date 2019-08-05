<template>
  <div class="layout font-sans relative h-screen">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import config from '~/.temp/config.js'
import Header from '~/components/Header.vue'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    config () {
      return config
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
