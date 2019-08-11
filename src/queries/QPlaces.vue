<template>
  <span>
   <slot v-bind:posts="posts"></slot>
  </span>
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
query Places {
  posts: allCockpitPlace {
    edges {
      node {
        id
        title
        excerpt
        path
        province {
          display
        }
      }
    }
  }
}
</static-query>
