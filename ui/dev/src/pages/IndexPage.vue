<template>
  <q-page class="flex flex-center" padding>
    <Intersection>
      <q-list bordered class="list rounded-borders bg-dark" separator>
        <q-item-label header>
          <q-icon name="arrow_forward" /> {{ $t('pages.home.title') }}
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
    </Intersection>
  </q-page>
</template>

<script setup>
import pages from '../router/pages'
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const meta = inject('meta') // inside setup()

const { t } = useI18n({ useScope: "global" });

meta({
  title: t('pages.home.title'),
})
</script>

<style lang="sass" scoped>
.list
  width: 380px
  max-width: 100%
</style>
