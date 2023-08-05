<template>
  <VMain class="tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-secondary">
    <div class="tw-flex tw-gap-10 tw-justify-center">
      <VCard class="tw-cursor-pointer" @click="selectIdentification(EnumIdentification.INDIVIDUAL_PERSON)">
        <div class="tw-p-10 tw-text-center">
          <VImg src="@/assets/pai-de-pet.svg" width="250px" height="250px"></VImg>
          <VCardText>Sou pai de pet</VCardText>
        </div>
      </VCard>
      <VCard class="tw-cursor-pointer tw-border-red" :border="50" @click="selectIdentification(EnumIdentification.NGO)">
        <div class="tw-p-10 tw-text-center">
          <VImg src="@/assets/ong.svg" width="250px" height="250px"></VImg>
          <VCardText>Sou ONG</VCardText>
        </div>
      </VCard>
    </div>
    <div class="tw-w-full tw-p-8">
      <VBtn rounded class="tw-w-full">Próximo</VBtn>
    </div>
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
