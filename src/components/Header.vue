<template>
  <header class="p-3 md:p-10 header">
      <div class="relative z-20 flex items-center justify-between flex-wrap">
          <a href="/" class="logo block">
            <g-image src="~/assets/images/mzango-logo-default.png" width="110" alt="Mzango" immediate="true" class="logo" />
          </a>
        <nav class="mt-4 md:mt-0 hidden md:block">
          <ul class="flex justify-center">
            <li class="px-4"><g-link class="nav-places" to="/explore">City Guides</g-link></li>
            <li class="px-4"><g-link class="nav-hosts" to="/stay">Places to Stay</g-link></li>
            <li class="px-4"><g-link class="nav-actvities" to="/do">Things to Do</g-link></li>
            <li class="px-4"><g-link class="nav-actvities" to="/see">Places of Interest</g-link></li>
          </ul>
        </nav>
        <div class="social-links">
          <g-link class="btn bg-transparent hover:bg-black hover:text-white text-black border border-black hover:border-transparent font-bold rounded-full px-5 py-2" to="/mag">Magazine</g-link>
          <Nav />
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
