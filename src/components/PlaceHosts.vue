<template>
    <ul>
      <li v-for="edge in $static.place.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
</template>

<static-query>
  query Place($id: String!) {
    place: cockpitPlace(id: $id) {
      title
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
</static-query>

<script>
  export default {
    name: 'PlaceHosts',
    props: ['post']
  }
</script>
