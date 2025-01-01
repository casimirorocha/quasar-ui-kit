<template>
  <q-page padding>
    <MyComponent />
  </q-page>
</template>

<script setup>
import { metaTags } from '../../../src/composable'

metaTags({
  title: 'Moreninhafreitas, 27, Feminino, Belo Horizonte, Minas Gerais',
})
</script>


<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
