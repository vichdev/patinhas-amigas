<template>
  <div>
    hello world 1
  </div>
  <div>teste</div>
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
