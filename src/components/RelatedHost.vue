<template>
    <li v-if="post.title"><g-link :to="post.path" class="bg-white text-black">{{ post.title }}</g-link></li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
