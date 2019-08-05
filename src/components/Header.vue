<template>
  <header class="header p-3 md:p-10 sticky top-0 z-30">
      <div class="flex items-center justify-between flex-wrap">
          <a href="/" class="logo block">
            <g-image src="~/assets/images/mzango-logo-default.png" width="110" alt="Mzango" immediate="true" class="logo" />
          </a>
        <nav class="mt-4 md:mt-0 hidden md:block">
          <ul class="flex justify-center">
            <li class="px-4"><g-link class="nav-about" to="/places">Places</g-link></li>
            <li class="px-4"><g-link class="nav-work" to="/hosts">Hosts</g-link></li>
            <li class="px-4"><g-link class="nav-themes" to="/activities">Activities</g-link></li>
            <li class="px-4"><g-link class="nav-tutorials" to="/mag">Magazine</g-link></li>
            <li class="px-4"><g-link class="nav-videos" to="/provinces">Provinces</g-link></li>
          </ul>
        </nav>
        <div class="social-links">
          <g-link class="hidden sm:block btn inline-block btn-black bg-black hover:bg-gray-800 hover:text-white text-sm text-white uppercase leading-none font-bold py-3 px-6 rounded-full" to="/contact/">Level Up</g-link>
          <Nav />
        </div>
      </div>
  </header>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Header',
  components: {
    Nav
  }
}
</script>
