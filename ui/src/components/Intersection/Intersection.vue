<script setup>
defineOptions({
  name: 'Intersection'
})
</script>

<template>
  <q-intersection :transition-duration="200" appear tag="div" transition="scale">
    <slot />
  </q-intersection>
</template>

<style lang="sass" scoped>

</style>