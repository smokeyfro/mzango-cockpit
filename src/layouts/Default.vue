<template>
  <div class="layout font-sans relative h-screen">
    <Header />
    <div class="h-full w-full fixed top-0 z-0">
      <g-image src="~/assets/images/home-header-pink.jpg" class="object-cover h-full" />
    </div>
    <slot/>
    <BottomNav />
    <Footer />
  </div>
</template>

<script>
import config from '~/.temp/config.js'
import Header from '~/components/Header.vue'
import BottomNav from '@/components/BottomNav'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    BottomNav,
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
