<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <article>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
        <div class="flex">
          <div class="w-1/2">
            <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
          </div>
          <div class="w-1/2 markdown text-xl leading-normal text-gray-700" v-html="$page.post.content" />
        </div>
        <div class="mb-10">
          <ul class="mt-6 mr-3">
            <li><strong class="w-1/4 inline-block">Address:</strong> <span>{{ $page.post.address }}</span></li>
            <li v-if="$page.post.place"><strong class="w-1/4 inline-block">City:</strong> <span>{{ $page.post.place.display }}</span></li>
            <li v-if="$page.post.province"><strong class="w-1/4 inline-block">Province:</strong> <span>{{ $page.post.province.display }}</span></li>
            <li><strong class="w-1/4 inline-block">Email:</strong> <span>{{ $page.post.email }}</span></li>
            <li v-if="$page.post.website"><strong class="w-1/4 inline-block">Website:</strong> <span>{{ $page.post.website }}</span></li>
            <li v-if="$page.post.phone"><strong class="w-1/4 inline-block">Contact:</strong> <span>{{ $page.post.phone }} / {{ $page.post.mobile }}</span></li>
            <li v-if="$page.post.longitude"><strong class="w-1/4 inline-block">Coordinates:</strong> <span>{{ $page.post.longitude }} (long) / {{ $page.post.latitude }} (lat)</span></li>
            <li v-if="$page.post.twitter"><strong class="w-1/4 inline-block">Twitter:</strong> <span>{{ $page.post.twitter }}</span></li>
            <li v-if="$page.post.facebook"><strong class="w-1/4 inline-block">Facebook:</strong> <span>{{ $page.post.facebook }}</span></li>
            <li v-if="$page.post.instagram"><strong class="w-1/4 inline-block">Instagram:</strong> <span>{{ $page.post.instagram }}</span></li>
            <li v-if="$page.post.accommodation_type"><strong class="w-1/4 inline-block">Accommodation:</strong>
              <span>
                <span v-for="(list, index) in $page.post.accommodation_type">{{ list.title }}<span v-if="index+1 < $page.post.accommodation_type.length">, </span></span>
              </span>
            </li>
            <li v-if="$page.post.facility"><strong class="w-1/4 inline-block">Facilities:</strong>
              <span>
                <span v-for="(list, index) in $page.post.facility">{{ list.title }}<span v-if="index+1 < $page.post.facility.length">, </span></span>
              </span>
            </li>
          </ul>
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
      title: `${this.$page.post.title} ${this.$page.post.topic ? '- '+this.$page.post.topic.name : ''}`
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
query Host ($path: String) {
  post: cockpitHost(path: $path) {
    title
    slug
    content
    excerpt
    email
    website
    phone
    mobile
    facebook
    twitter
    instagram
    place {
      display
    }
    province {
      display
    }
    longitude
    latitude
    address
    facility{
      title
    }
  }
}
</page-query>

<style>

</style>
