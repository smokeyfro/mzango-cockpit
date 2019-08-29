<template>
  <ul>
    <slot v-bind:posts="provinces"></slot>
 </ul>
</template>

<script>
export default {
  computed: {
    provinces() {
      return this.$static.posts &&
        this.$static.posts.edges.map(e => e.node)
    }
  }
}
</script>

<static-query>
query Provinces {
  provinces: allCockpitProvince {
    edges {
      node {
        title
      }
    }
  }
}
</static-query>
