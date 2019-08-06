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
query Hosts {
  posts: allCockpitHost(limit: 8) {
    edges {
      node {
        id
        title
        excerpt
        path
        place {
          display
        }
        province {
          display
        }
      }
    }
  }
}
</static-query>
