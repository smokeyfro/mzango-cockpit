<template>
  <Layout class="bg-white">
    <div>
      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">Mag</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Showcasing South African Culture through Art, Film, Food and more.</p>
      </header>
      <section class="mt-10 flex flex-wrap -mb-4">
        <post-item class="w-1/4 flex-initial p-2" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostItem,
    Pagination
  },
  metaInfo () {
    return {
      title: this.config.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.config.siteName },
        { property: "og:description", content: this.config.siteDescription },
        { property: "og:url", content: this.config.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.config.siteName },
        { name: "twitter:description", content: this.config.siteDescription },
        { name: "twitter:site", content: "@connectr" },
        { name: "twitter:creator", content: "@connectr" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/sf-card.png`
    }
  },
}
</script>

<page-query>
  query Magazine ($page: Int) {
    posts: allCockpitPost(page: $page, perPage: 60) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
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
</page-query>
