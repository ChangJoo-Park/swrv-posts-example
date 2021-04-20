<template>
  <div class="grid grid-cols-3">
    <list-item
      v-for="post in data"
      :key="post.id"
      :post="post"
      :grayscale="false"
    />
  </div>
</template>

<script>
import usePosts from '../composable/use-posts'
import ListItem from './list-item.vue'

export default {
  components: {
    ListItem
  },
  setup() {
    const { data, error } = usePosts()
    return { data, error }
  }
}
</script>

<style>

</style>
