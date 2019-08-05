<template>
  <article class="flex space-between">
    <g-link :to="`${post.path}`" class="text-black font-bold">{{ post.title }}</g-link>
  </article>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }

      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')

      return text.length > length ? `${ text.slice(0, length)}${clamp}` : text
    }
  }
}
</script>
