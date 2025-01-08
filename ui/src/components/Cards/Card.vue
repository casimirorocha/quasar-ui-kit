<script setup>
defineOptions({
  name: 'Card'
})
</script>

<template>
  <q-card bordered class="shadow-24">
    <!-- Card Header -->
    <q-card-section v-if="$slots.title" class="q-pb-none">
      <h4 class="q-my-none flex font-weight-light text-h5 text-center items-center">
        <slot name="title" />
      </h4>
    </q-card-section>

    <!-- Card Body -->
    <q-card-section v-if="$slots.body">
      <slot name="body" />
    </q-card-section>

    <!-- Card Actions -->
    <q-card-actions v-if="$slots.actions">
      <slot name="actions" />
    </q-card-actions>
  </q-card>
</template>

<style lang="sass" scoped>

</style>