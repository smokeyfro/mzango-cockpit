<template>
  <header class="header p-3 md:p-10 sticky top-0 z-30">
      <div class="flex items-center justify-between flex-wrap">
          <a href="/" class="logo block">
            <g-image src="~/assets/images/mzango-logo-default.png" width="110" alt="Mzango" immediate="true" class="logo" />
          </a>
        <nav class="mt-4 md:mt-0 hidden md:block">
          <ul class="flex justify-center">
            <li class="px-4"><g-link class="nav-places" to="/places">City Guides</g-link></li>
            <li class="px-4"><g-link class="nav-hosts" to="/hosts">Places to Stay</g-link></li>
            <li class="px-4"><g-link class="nav-actvities" to="/activities">Things to Do</g-link></li>
          </ul>
        </nav>
        <div class="social-links">
          <g-link class="bg-black hover:bg-gray-800 hover:text-white text-white font-bold rounded-full px-5 py-2" to="/contact/">Magazine</g-link>
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
