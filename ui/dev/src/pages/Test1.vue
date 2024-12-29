<template>
  <q-page padding>
    <MyComponent />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Test1',
  created() {
    this.$meta({
      title: 'Moreninhafreitas, 27, Feminino, Belo Horizonte, Minas Gerais',
    })
  }
})
</script>


<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
