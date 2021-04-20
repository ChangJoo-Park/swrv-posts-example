<template>
  <div class="min-h-30 flex flex-col p-4">
    <div
      class="transition-all duration-fast ease-in-out cursor-pointer h-40 flex flex-col justify-center items-center bg-blue-200 rounded text-4xl hover:text-10xl"
      :class="{ 'bg-gray-200': grayscale }"
    >
      <div
        class="text-blue-100 select-none"
        :class="{ 'text-gray-100': grayscale }"
      >
        {{ post.id }}
      </div>
    </div>
    <div class="font-bold text-lg py-2">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['post', 'grayscale']
}
</script>

<style>

</style>
