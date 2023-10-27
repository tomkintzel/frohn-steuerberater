<script setup>
const route = useRoute()
let canPath = route.path.length > 1 ? route.path : ''
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.frohn-steuerberater.de' + canPath
    }
  ]
})
</script>
<template>
  <main>
    <ContentDoc :class="$route.path.slice(1)" />
  </main>
</template>
