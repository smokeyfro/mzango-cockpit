<template>
    <li v-if="post.title">{{ post.title }}</li>
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
