<template>
  <section class="">
    <div class="w-1/4 flex-initial p-2" v-for="item in $page.posts.edges" :key="edge.node.id" :post="edge.node">{{ edge.node.title }}</div>
  </section>
</template>

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

<script>

export default {
  name: 'Provinces',
}
</script>
