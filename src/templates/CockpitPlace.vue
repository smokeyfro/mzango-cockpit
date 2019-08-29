<template>
	<Layout>
    <main class="p-10 relative z-10 bg-white mx-10 shadow-2xl">
		<article>
			<h1>{{ $page.place.title }}</h1>
			<ul class="post-list mt-10">
				<li v-for="{ node } in $page.hosts.edges" :key="node.id">
					<RelatedHost :post="node" />
				</li>
			</ul>
		</article>
  </main>
	</Layout>
</template>

<script>
import RelatedHost from '~/components/RelatedHost'
export default {
	components: {
		RelatedHost
	},
	computed: {
		prevUrl () {
			if (!this.$page.prevPlace) return null
				return this.$page.prevPlace.path + '/'
		},
		nextUrl () {
			if (!this.$page.nextPlace) return null
				return this.$page.nextPlace.path + '/'
		},
		metaLinks () {
			const links = []
			this.prevUrl && links.push({rel: 'previous', href: this.prevUrl})
			this.nextUrl && links.push({rel: 'next', href: this.nextUrl})
			return links
		}
	}
}
</script>

<page-query>
  query Place ($id: String) {
    place: cockpitPlace (id: $id) {
      id
      path
      title
      slug
      belongsTo {
        edges {
          node {
            ... on CockpitHost {
              id
              title
              path
          	}
          }
        }
      }
    }
  }
  </page-query>
