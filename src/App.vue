<template>
  <div class="container mx-auto p-12">
    <h1 class="font-bold text-6xl font-mono hover:text-blue-500 hover:underline">
      <a href="https://docs-swrv.netlify.app/" rel="noopener noreferer" target="__blank">
        <span class="mr-4">SWRV Post Example</span>
        <svg class="icon outbound inline-block" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="32" height="32" data-v-99f6c566=""><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
      </a>
    </h1>
    <router-link to="/" class="text-blue-400 underline">One</router-link>&nbsp;
    <router-link to="/another" class="text-blue-400 underline">Another</router-link>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
