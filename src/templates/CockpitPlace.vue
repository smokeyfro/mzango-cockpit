<template>
	<Layout>
     <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
      <article>
        <div class="">
          <div class="flex justify-left content-center flex-wrap items-center">
            <span v-if="$page.place.province.display" class="text-xl sm:text-1xl md:text-2xl font-sans"><g-link :to="`${provinceUrl}`" style="color:#E4104A;">{{ $page.place.province.display }}</g-link>&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span v-if="$page.place.district.display"class="text-xl sm:text-1xl md:text-2xl font-sans"><g-link :to="`${districtUrl}`" style="color:#E4104A;">{{ $page.place.district.display }}</g-link></span>
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mr-5">{{ $page.place.title }}</h1>
        </div>
        <div class="flex">
          <div class="">
            <div v-if="$page.place.excerpt" class="markdown text-3xl mr-10 leading-normal text-gray-700" v-html="$page.place.excerpt" />
            <a v-if="$page.place.website" :href="$page.place.website" class="inline-block rounded-full px-5 py-2 text-md font-semibold text-white mt-6" style="background-color:#E4104A;">Official Site</a>
            <!-- <div class="mr-12 mt-5" v-if="$page.place.latitude">
              <template>
                <weather
                    api-key="408dbe336740c8c807f4a1c1ecf60e98"
                    :latitude="$page.place.latitude"
                    :longitude="$page.place.longitude"
                    language="en"
                    bar-color="#E4104A"
                    units="uk">
                </weather>
            </template>
            </div> -->
          </div>
          <div v-if="$page.place.content" class="markdown text-xl leading-normal text-gray-700" v-html="$page.place.content" />
        </div>

        <ul class="post-list hidden">
          <li v-for="{ node } in $page.hosts.edges" :key="node.id">
            <RelatedHost :post="node" />
          </li>
        </ul>
      </article>
    </main>
	</Layout>
</template>

<script>
import config from '~/.temp/config.js'
import slugify from '@sindresorhus/slugify'
import PostHeader from '~/components/PostHeader'
import RelatedHost from '@/components/RelatedHost'

export default {
    components: {
        // 'weather': VueWeatherWidget,
        PostHeader,
        RelatedHost
    },
    metaInfo () {
        return {
        title: `${this.$page.place.title}`
        }
    },
    computed: {
        config () {
            return config
        },
        postUrl () {
            let siteUrl = this.config.siteUrl
            let postSlug = this.$page.place.slug

            return postSlug ? `${siteUrl}/places/${postSlug}/` : `${siteUrl}/places/${slugify(this.$page.place.title)}/`
        },
        provinceUrl () {
            let siteUrl = this.config.siteUrl
            let provinceSlug = this.$page.place.province.display

            return `/provinces/${slugify(this.$page.place.province.display)}/`
        },
        districtUrl () {
            let siteUrl = this.config.siteUrl
            let districtSlug = this.$page.place.district.display

            return `/districts/${slugify(this.$page.place.district.display)}/`
        }
    }
}
</script>
<page-query>
    query Place($path: String) {
        place: cockpitPlace(path: $path) {
            title
            excerpt
            content
            excerpt
            weather
            area_code
            postal_code
            municipality
            population
            website
            longitude
            latitude
            province{
                display
            }
            district{
                display
            }
        }
        hosts: allCockpitHost (order:ASC) {
            edges {
                node {
                    title
                }
            }
        }
    }
</page-query>