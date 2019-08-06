<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <article>
        <div class="">
          <span v-if="$page.post.district">{{ $page.post.district.display }} - </span>
          <span v-if="$page.post.province">{{ $page.post.province.display }}</span>
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
        <div class="">

          <span v-if="$page.post.website">{{ $page.post.website }}</span>
        </div>
        <div class="flex">
          <div class="">
            <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
            <div class="mr-12 mt-5" v-if="$page.post.latitude">
              <template>
                <weather
                    api-key="408dbe336740c8c807f4a1c1ecf60e98"
                    :latitude="$page.post.latitude"
                    :longitude="$page.post.longitude"
                    language="en"
                    units="uk">
                </weather>
            </template>
            </div>
            <ul class="mt-6 mr-3 hidden">
              <li><strong class="w-1/4 inline-block">Population:</strong> <span>{{ $page.post.population }}</span></li>
              <li><strong class="w-1/4 inline-block">Area Code:</strong> <span>{{ $page.post.area_code }}</span></li>
              <li><strong class="w-1/4 inline-block">Postal Code:</strong> <span>{{ $page.post.postal_code }}</span></li>
              <li v-if="$page.post.website"><strong class="w-1/4 inline-block">Website:</strong> <span>{{ $page.post.website }}</span></li>
            </ul>
          </div>
          <div class="markdown text-xl leading-normal text-gray-700" v-html="$page.post.content" />
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
