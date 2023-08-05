<template>
  <main class="tw-flex tw-h-full tw-items-center tw-justify-center tw-gap-5">
    <div class="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full">
      <VImg src="@/assets/login-theme.svg" max-width="500" width="100%" height="auto" />
    </div>
    <VCard class="tw-h-full tw-w-full">
      <Logo />
    </VCard>
  </main>
</template>

<script lang="ts" setup>
import Logo from '@/components/Logo/Logo.vue';
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
