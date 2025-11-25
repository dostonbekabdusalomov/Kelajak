<template>
  <component :is="icon" v-if="icon" />
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icon = defineAsyncComponent(() =>
  import(`~/assets/icons/${props.name}.svg`).catch(() => null)
)
</script>
