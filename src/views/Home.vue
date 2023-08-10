<template>
  <VMain class="tw-h-screen tw-flex tw-flex-col tw-bg-secondary">
    hello world!
  </VMain>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

enum EnumIdentification {
  NGO = 0,
  INDIVIDUAL_PERSON = 1
}

const identification = ref<EnumIdentification | undefined>(undefined)

const selectIdentification = (identificationValue: EnumIdentification) => {
  identification.value = identificationValue
}



</script>
