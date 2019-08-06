<template>
  <div class="relative">
    <div class="h-full w-full">
      <g-image src="~/assets/images/home-header-pink.jpg" class="object-cover h-full" />
    </div>
    <Header class="fixed top-0 w-full" />
      <main class="bg-white p-20">
        <h2>Popular Hosts</h2>
        <div class="">

        </div>
      </main>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
