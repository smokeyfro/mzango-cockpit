<template>
  <Layout class="bg-white">
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <post-header :post="$page.post" />

      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16">
        <div class="markdown text-xl leading-normal text-gray-700" v-html="$page.post.excerpt" />

        <div class="markdown text-xl leading-normal text-gray-700" v-html="$page.post.content" />

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
    },
  },
  computed: {
    config () {
      return config
    },
    postUrl () {
      let siteUrl = this.config.siteUrl
      let postSlug = this.$page.post.slug

      return postSlug ? `${siteUrl}/mag/${postSlug}/` : `${siteUrl}/mag/${slugify(this.$page.post.title)}/`
    }
  }
}
</script>

<page-query>
query Tag ($path: String) {
  post: cockpitTag(path: $path) {
    title
    excerpt
  }
}
</page-query>
