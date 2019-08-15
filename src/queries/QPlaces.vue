<template>
  <div class="">
    <span>
     <slot v-bind:posts="post"></slot>
    </span>
  </div>
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
  post: allCockpitPlace {
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
