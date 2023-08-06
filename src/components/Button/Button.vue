
<template>
  <VBtn :title="text" :rounded="rounded" :ripple="{ class: 'tw-text-rgba-light' }" :to="to" :variant="variant"
    :loading="loading ? 'gray' : false" :exact="exact" :disabled="disabled" :block="block" :active="active"
    :appendIcon="appendIcon" :prependIcon="prependIcon" :icon="icon">
    {{ text }}
  </VBtn>
</template>

<script setup lang="ts">
import type IButtonProps from './interfaces/IButtonProps'

withDefaults(defineProps<IButtonProps>(), {
  rounded: false,
  loading: false,
  exact: true,
  disabled: false,
  variant: 'elevated',
})

</script>
