<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 mx-10">
      <div class="flex items-center">
        <div class="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-md mx-auto px-6 md:px-0  mt-20">
          <section class="relative z-2 w-auto mx-auto ">
            <span class="poop absolute -mt-10 text-5xl inset-x-0 text-center pointer-events-none z-0">💩</span>
            <div class="relative z-1 bg-white mx-auto px-8 py-6 rounded  shadow-xl hover:shadow-2xl">
              <h1 class="text-2xl font-sans font-bold mb-4">Oh Crap!</h1>
              <h2 class="text-lg font-sans font-bold mb-4">Who's a bad web dev?</h2>
              <p class="mb-4 leading-normal text-gray-700 mb-6">Looks like the link you clicked on no longer exists or has been moved to a new location. Either way, my bad. My trusty robots will have informed me of the travisty and I'll get it fixed <strong>pronto</strong>!</p>
              <div class="flex justify-between w-full">
                <g-link to="/" class="text-sm text-black hover:text-gray-700 font-bold font-sans transition-color">&larr; Back to home?</g-link>
                <g-link to="/" class="text-sm text-black hover:text-gray-700 font-bold font-sans transition-color text-right">Send me a message &rarr;</g-link>
              </div>
            </div>
          </section>
          <div class="error-bg font-mono fixed text-base text-gray-500 top-0 left-0 righ-0"></div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: `Page Not Found (404)`,
    }
  },
}
</script>

<style>

  </style>
