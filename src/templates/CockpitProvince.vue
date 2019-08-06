<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <article>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
        <div class="flex">
          <div class="">
            <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
            <div class="flex mt-6">
              <g-image src="~/assets/sun.svg" width="20" immediate="true" /> <span class="text-lg font-italic ml-2 leading-normal text-gray-700" v-html="$page.post.weather" />
            </div>

            <ul class="mt-6 mr-3">
              <li><strong class="w-1/4 inline-block">Population:</strong> <span>{{ $page.post.population }}</span></li>
              <li><strong class="w-1/4 inline-block">Area:</strong> <span>{{ $page.post.area_km }}</span> <span>{{ $page.post.area_sqm }}</span></li>
              <li><strong class="w-1/4 inline-block">Code:</strong> <span>{{ $page.post.code }}</span></li>
              <li v-if="$page.post.website"><strong class="w-1/4 inline-block">Capital:</strong> <span>{{ $page.post.capital }}</span></li>
              <li v-if="$page.post.longitude"><strong class="w-1/4 inline-block">Largest City:</strong> <span>{{ $page.post.large_city }}</span></li>
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

export default {
  components: {
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
query Province ($path: String) {
  post: cockpitProvince(path: $path) {
    title
    slug
    content
    excerpt
    capital
    large_city
    area_km
    area_sqm
    population
    code
  }
}
</page-query>
