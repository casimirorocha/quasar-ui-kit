<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.meta.goBack"
          dense
          flat
          icon="arrow_back"
          round
          @click="$router.go(-1)"
        />

        <q-toolbar-title>
          {{ pageTitle }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { inject, ref } from 'vue'

const pageTitle = ref('Quasar App')

const bus = inject('bus') // inside setup()

bus.on('page:title', async (title) => {
  pageTitle.value = title
})
</script>
