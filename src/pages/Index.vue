<template>
  <div class="relative">
    <div class="h-full w-full overflow-hidden relative">
      <g-image src="~/assets/images/home-header-pink.jpg" class="object-cover h-full" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 w-full object-cover">
        <path fill="#fff" fill-opacity="1" d="M0,160L1440,96L1440,320L0,320Z"></path>
      </svg>
    </div>
    <Header class="absolute top-0 w-full z-20" />
    <main class="p-20 -mt-24 relative z-20 -mt-24">
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
      <!-- <section class="p-20">
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
      </section> -->
    <BottomNav />
    <Footer />
    <modal v-show="isModalVisible" @close="closeModal">
      <template slot="header">
        <h2>Hello!</h2>
      </template>
      <template slot="body">
        <p>I am still activitely working on the site, so please keep this in mind while taking a look around.</p>
      </template>
      <template slot="footer">
        <div class="mt-5">
          <button @click="closeModal" aria-label="Close modal" type="button" name="button" class="bg-black text-white py-2 px-4 rounded-full">Roger that!</button>
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

export default {
  components: {
    Header,
    QProvinces,
    BottomNav,
    Modal,
    Footer,
    QHosts: () => import('../queries/QHosts.vue'),
    QProvinces: () => import('../queries/QProvinces.vue')
  },
  metaInfo: {
    title: 'Home'
  },
  stored: {
    isModalVisible: {
      type: String,
      key: 'modal',
      default: true
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>
