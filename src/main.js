import DefaultLayout from '~/layouts/Default.vue'
// import VuePlyr from 'vue-plyr'
// import 'vue-plyr/dist/vue-plyr.css'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)
  // Vue.use(VuePlyr)
  Vue.use(VueYouTubeEmbed)

  head.htmlAttrs = { lang: 'en', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-sans' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo'
  })
}
