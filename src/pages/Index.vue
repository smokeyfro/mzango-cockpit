<template>
  <div class="relative">
    <Header class="fixed top-0 w-full z-30" />
    <div class="h-screen w-full overflow-hidden fixed top-0">
      <g-image src="~/assets/images/home-header-pink.jpg" class="object-cover object-bottom h-full" />
    </div>
    <div class="h-screen flex items-center justify-center content-center">
      <HomeSearch />
    </div>
    <main class="p-10 relative z-30 bg-white mx-10 shadow-2xl mb-10 rounded-lg">
      <div class="flex justify-between w-full">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-sans font-bold content-center">Popular Hosts</h2>
        <g-link to="/stay" class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-3 px-6 border border-black hover:border-transparent rounded-full">View All</g-link>
      </div>
      <QHosts v-slot="{ posts: hosts }" class="mt-10 grid md:3-cols lg:4-cols xl:5-cols">
        <template v-for="post in hosts">
          <div class="w-full rounded overflow-hidden shadow-lg" v-bind:key="post.id">
              <g-link v-bind:key="post.id" :to="post.path">
                <g-image src="~/assets/images/spacer.png" class="spacer" />
              </g-link>
              <div class="p-6">
                <h2 class="font-bold text-xl">
                  <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
                </h2>
                {{ post.place.display }}, {{ post.province.display }}
              </div>
          </div>
        </template>
      </QHosts>
      <BottomNav />
      <Footer />
    </main>
    <modal v-show="modal === true">
      <template slot="header">
        <h2>Greetings fellow earthling!</h2>
      </template>
      <template slot="body">
        <p class="text-xl">This is the early preview of Mzango, <em>the unofficial guide to backpacking in South Africa</em>.</p> 
        <p class="my-4">The site is still in active development and a lot will change before the official launch. <a href="#" v-on:click="modal = false" class="font-bold bg-yellow-200">Subscribe</a> to be notified when we launch.</p>
      </template>
      <template slot="footer">
        <div class="mt-5">
          <button v-on:click="modal = false" aria-label="Close modal" type="button" name="button" class="bg-black text-white py-2 px-4 rounded-full">Roger that!</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Header from '~/components/Header'
import BottomNav from '~/components/BottomNav'
import Footer from '~/components/Footer'
import QProvinces from '@/queries/QProvinces';
import Modal from '@/components/Modal'
import HomeSearch from '@/components/HomeSearch'

export default {
  components: {
    Header,
    QProvinces,
    BottomNav,
    Modal,
    HomeSearch,
    Footer,
    QHosts: () => import('../queries/QHosts.vue'),
    QProvinces: () => import('../queries/QProvinces.vue')
  },
  metaInfo: {
    title: 'Home'
  },
  stored: {
    modal: {
      type: String,
      key: 'modal',
      default: true
    }
  }
}
</script>
