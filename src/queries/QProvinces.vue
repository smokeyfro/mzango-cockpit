<template>
  <ul>
    <slot v-bind:posts="provinces"></slot>
 </ul>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$static.posts &&
        this.$static.posts.edges.map(e => e.node)
    }
  }
}
</script>

<static-query>
query ListProvinces {
  posts: allCockpitProvince(limit: 8) {
    edges {
      node {
        id
        title
        excerpt
        path
      }
    }
  }
}
</static-query>
