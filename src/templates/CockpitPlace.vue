<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <article>
        <div class="">
          <div class="flex justify-left content-center flex-wrap items-center">
            <span v-if="$page.post.province.display" class="text-xl sm:text-1xl md:text-2xl font-sans"><g-link :to="`${provinceUrl}`" style="color:#E4104A;">{{ $page.post.province.display }}</g-link>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span v-if="$page.post.district.display"class="text-xl sm:text-1xl md:text-2xl font-sans"><g-link :to="`${districtUrl}`" style="color:#E4104A;">{{ $page.post.district.display }}</g-link></span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mr-5">{{ $page.post.title }}</h1>
        </div>
        <div class="flex">
          <div class="">
            <div v-if="$page.post.excerpt" class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
            <a v-if="$page.post.website" :href="$page.post.website" class="inline-block rounded-full px-5 py-2 text-md font-semibold text-white mt-6" style="background-color:#E4104A;">Official Site</a>
            <div class="mr-12 mt-5" v-if="$page.post.latitude">
              <template>
                <weather
                    api-key="408dbe336740c8c807f4a1c1ecf60e98"
                    :latitude="$page.post.latitude"
                    :longitude="$page.post.longitude"
                    language="en"
                    bar-color="#E4104A"
                    units="uk">
                </weather>
            </template>
            </div>
          </div>
          <div v-if="$page.post.content" class="markdown text-xl leading-normal text-gray-700" v-html="$page.post.content" />
        </div>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import slugify from '@sindresorhus/slugify'
import PostHeader from '~/components/PostHeader'
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';

export default {
  components: {
    'weather': VueWeatherWidget,
    PostHeader
  },
  metaInfo () {
    return {
      title: `${this.$page.post.title}`
    }
  },
  data() {
    return {
      darksky: process.env.DARKSKY_API_KEY
    };
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    }
  },
  computed: {
    config () {
      return config
    },
    postUrl () {
      let siteUrl = this.config.siteUrl
      let postSlug = this.$page.post.slug

      return postSlug ? `${siteUrl}/places/${postSlug}/` : `${siteUrl}/places/${slugify(this.$page.post.title)}/`
    },
    provinceUrl () {
      let siteUrl = this.config.siteUrl
      let provinceSlug = this.$page.post.province.display

      return `/provinces/${slugify(this.$page.post.province.display)}/`
    },
    districtUrl () {
      let siteUrl = this.config.siteUrl
      let districtSlug = this.$page.post.district.display

      return `/districts/${slugify(this.$page.post.district.display)}/`
    }
  }
}
</script>

<page-query>
query Place ($path: String) {
  post: cockpitPlace(path: $path) {
    title
    slug
    content
    excerpt
    weather
    area_code
    postal_code
    municipality
    population
    province{
      display
    }
    district{
      display
    }
    website
    longitude
    latitude
  }
}
</page-query>
