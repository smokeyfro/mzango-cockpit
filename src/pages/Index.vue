<template>
  <div class="relative">
    <div class="h-full w-full">
      <g-image src="~/assets/images/home-header-pink.jpg" class="object-cover h-full" />
    </div>
    <Header class="absolute top-0 w-full z-20" />
      <main class="bg-white p-20">
        <div class="flex justify-between w-full">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-sans font-bold content-center">Popular Hosts</h2>
          <g-link to="/stay" class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3 px-6 border border-black hover:border-transparent rounded-full">View All</g-link>
        </div>
        <QHosts v-slot="{ posts: hosts }" class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
          <template v-for="post in hosts">
            <article class="w-full rounded overflow-hidden shadow-lg">
                <g-link :key="post.id" :to="post.path">
                  <g-image src="~/assets/images/spacer.png" class="spacer" />
                </g-link>
                <div class="p-6">
                  <h2 class="font-bold text-xl">
                    <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
                  </h2>
                  {{ post.place.display }}, {{ post.province.display }}
                </div>
            </article>
          </template>
        </QHosts>
      </main>
      <section class="p-20">
        <div class="provinces">
          <QProvinces v-slot="{ provinces: provinces }">
            <template v-for="post in posts">
              <li><g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link></li>
            </template>
          </QProvinces>
        </div>
        <div class="">

        </div>
        <div class="">

        </div>
      </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import QProvinces from '@/queries/QProvinces';

export default {
  components: {
    Header,
    QProvinces,
    QHosts: () => import('../queries/QHosts.vue'),
    QProvinces: () => import('../queries/QProvinces.vue')
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
