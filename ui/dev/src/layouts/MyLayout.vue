<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          icon="home"
          round
          to="/"
        />

        <q-toolbar-title>
          quasar-ui-kit v{{ version }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from 'ui' // "ui" is aliased in quasar.conf.js

export default {
  name: 'MyLayout',

  setup () {
    return {
      version
    }
  }
}
</script>
