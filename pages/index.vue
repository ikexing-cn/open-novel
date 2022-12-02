<script lang="ts" setup>
useHead({
  title: 'Open novel',
  meta: [
    { hid: 'description', name: 'description', content: 'Open novel page' },
  ],
})
</script>

<template>
  <div flex="~ col" items-center justify-center w-full h-100vh font-bold>
    <h1 text-4xl>
      Open Novel
    </h1>
    <br>
    <h2 text-4xl>
      WIP
    </h2>
  </div>
</template>

<style>
#__nuxt {
  width: 100vw;
  height: 100vh;
}
</style>
