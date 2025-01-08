<template>
  <q-page class="flex flex-center" padding>
    <q-list bordered class="list rounded-borders bg-dark" separator>
      <q-item-label header>
        <q-icon name="arrow_forward" /> Pages
      </q-item-label>
      <q-item
        v-for="page in pages"
        :key="page.path"
        :to="page.path"
      >
        <q-item-section>
          <q-item-label class="text-subtitle1">
            <q-icon name="arrow_right" /> {{ page.title }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="open_in_new" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import pages from '../router/pages'
import { metaTags } from '../../../src/composable'

metaTags({
  title: 'Home',
})
</script>

<style lang="sass" scoped>
.list
  width: 380px
  max-width: 100%
</style>
