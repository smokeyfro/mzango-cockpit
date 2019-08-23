module.exports = function (api) {
	// Create page entries for every post; this allows us to explicitly associate a next and
	// previous ID with a given page
	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`
			query RelatedHosts {
				places: allCockpitHost (order: ASC) {
					edges {
						node {
							id,
							date,
							path
						}
					}
				}
			}
		`)

		data.places.edges.forEach(({ node }, i, edges) => {
			const prev = edges[i - 1]
			const next = edges[i + 1]

			createPage({
				path: node.path,
				component: './src/templates/CockpitHost.vue',
				queryVariables: {
					id: node.id,
					prevId: (prev && prev.node.id) || null,
					nextId: (next && next.node.id) || null
				}
			})
		})
	})
}
