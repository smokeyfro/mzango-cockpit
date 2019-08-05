<template>
  <Layout>
    <main class="p-10">
      <article>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
        <div class="flex">
          <div class="">
            <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
            <div class="flex mt-6">
              <g-image src="~/assets/sun.svg" width="20" immediate="true" /> <span class="text-lg font-italic ml-2 leading-normal text-gray-700" v-html="$page.post.weather" />
            </div>

            <ul class="mt-6 mr-3">
              <li v-if="$page.post.province"><strong class="w-1/4 inline-block">Province:</strong> <span>{{ $page.post.province.display }}</span></li>
              <li><strong class="w-1/4 inline-block">District:</strong> <span>{{ $page.post.district }}</span></li>
              <li><strong class="w-1/4 inline-block">Population:</strong> <span>{{ $page.post.population }}</span></li>
              <li><strong class="w-1/4 inline-block">Area Code:</strong> <span>{{ $page.post.area_code }}</span></li>
              <li><strong class="w-1/4 inline-block">Postal Code:</strong> <span>{{ $page.post.postal_code }}</span></li>
              <li v-if="$page.post.website"><strong class="w-1/4 inline-block">Website:</strong> <span>{{ $page.post.website }}</span></li>
              <li v-if="$page.post.longitude"><strong class="w-1/4 inline-block">Longitude:</strong> <span>{{ $page.post.longitude }}</span></li>
              <li v-if="$page.post.latitude"><strong class="w-1/4 inline-block">Latitude:</strong> <span>{{ $page.post.latitude }}</span></li>
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
      title: `${this.$page.post.title} ${this.$page.post.topic ? '- '+this.$page.post.topic.name : ''}`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description(this.$page.post)
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.description(this.$page.post) },
        { property: "og:url", content: this.postUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:description", content: this.description(this.$page.post) },
        { name: "twitter:site", content: "@connectr" },
        { name: "twitter:creator", content: "@connectr" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  mounted () {
    import('medium-zoom').then(mediumZoom => {
      this.zoom = mediumZoom.default('.markdown p > img')
    })
  },
  methods: {
    imageLoadError (e) {
      e.target.src = `/images/authors/default.png`
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str.replace('-', ' ')
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')
    },

  },
  computed: {
    config () {
      return config
    },
    avatar () {
      return `/images/chris.jpg`
    },
    postUrl () {
      let siteUrl = this.config.siteUrl
      let postSlug = this.$page.post.slug

      return postSlug ? `${siteUrl}/places/${postSlug}/` : `${siteUrl}/places/${slugify(this.$page.post.title)}/`
    },
    // },
    // ogImageUrl () {
    //   return this.$page.post.cover || `${this.config.siteUrl}/images/sf-card.png`
    // }
  },
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
    district
    website
    longitude
    latitude
  }
}
</page-query>
