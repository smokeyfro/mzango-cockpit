<template>
  <Layout>
    <article>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-5">{{ $page.post.title }}</h1>
      <div class="flex">
        <div class="">
          <div class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.post.excerpt" />
        </div>
        <div></div>
      </div>
    </article>
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

      return postSlug ? `${siteUrl}/journal/${postSlug}/` : `${siteUrl}/journal/${slugify(this.$page.post.title)}/`
    }
  },
}
</script>

<page-query>
query Post ($path: String) {
  post: cockpitPost(path: $path) {
    title
    slug
    excerpt
  }
}
</page-query>
