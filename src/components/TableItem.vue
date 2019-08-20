<template>
  <tr>
    <td><g-link :to="`${post.path}`">{{ post.title }}</g-link></td>
    <td>{{ post.district.display }}</td>
    <td>{{ post.province.display }}</td>
    <td>{{ post.longitude }} / {{ post.latitude }}</td>
    <td>{{ post.website }}</td>
    <td></td>
  </tr>
</template>

<script>
export default {
  props: ['post']
}
</script>
