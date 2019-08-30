<template>

  <Layout class="bg-white">
    <div>
      <header>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">City Guides</h1>
        <p class="text-grey-dark text-lg sm:text-3xl">Explore the cities and towns of South Africa.</p>
      </header>
      <div class="toolbar flex justify-between bg-gray-100 p-4 rounded-full mb-10 mt-8">
        <!-- <div class="search w-1/2 pr-4">
          <input type="text" name="placesSearch" v-model="searchQuery" value="" placeholder="Type in a town or city" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
        </div> -->
        <SearchForm />
        <div class="layout-toggle flex">
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mx-px rounded-full rounded-tr-none rounded-br-none" v-on:click="layout = 'grid'" v-bind:class="{ 'active': layout == 'grid'}" title="Grid">Grid</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4" v-on:click="layout = 'table'" v-bind:class="{ 'active': layout == 'table'}" title="Table">Table</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mx-px" v-on:click="layout = 'list'" v-bind:class="{ 'active': layout == 'list'}" title="List">List</a>
          <a class="cursor-pointer bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full rounded-tl-none rounded-bl-none" v-on:click="layout = 'map'" v-bind:class="{ 'active': layout == 'map'}" title="Map">Map</a>
        </div>
      </div>
      <section v-if="$page.posts.edges.length">
        <div v-if="layout === 'grid'" class="grid">
          <place-item class="" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'list'" class="list flex flex-wrap">
          <post-item class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        <div v-if="layout === 'map'" class="map">
          <map-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </div>
        <table v-if="layout === 'table'" class="table border border-2 border-collapse table-auto w-full text-left p-3">
          <tr>
            <th>Name</th>
            <th>Province</th>
            <th>State</th>
            <th>Location</th>
            <th>Code</th>
            <th>Website</th>
          </tr>
          <table-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
        </table>
      </section>
      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />
    </div>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import PostItem from '@/components/PostItem'
import PlaceItem from '@/components/PlaceItem'
import MapItem from '@/components/MapItem'
import TableItem from '@/components/TableItem'
import Pagination from '@/components/Pagination'
import SearchForm from '~/components/SearchForm'

export default {
  components: {
    PostItem,
    PlaceItem,
    MapItem,
    TableItem,
    Pagination,
    SearchForm,
  },
  stored: {
    layout: {
      type: String,
      key: 'layout',
      default: 'grid'
    }
  },
  data () {
    return {
      searchQuery: '',
      places: this.posts
    }
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
    },
    filteredPlaces (){
      if(this.searchQuery){
      return this.places.edges.node.filter((item)=>{
        return item.title.startsWith(this.searchQuery);
      })
      }else{
        return this.posts;
      }
    }
  },
}

</script>

<page-query>
  query Places ($page: Int) {
    posts: allCockpitPlace(page: $page, perPage: 12) @paginate {
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
          longitude
          latitude
          website
          area_code
          postal_code
          district {
            display
          }
          province {
            display
          }
        }
      }
    }
  }
</page-query>
