<template>
  <ul>
    <slot v-bind:posts="posts"></slot>
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
query Provinces {
  posts: allCockpitProvince {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</static-query>
