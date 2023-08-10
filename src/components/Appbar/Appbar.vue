<template>
  <VCard class="appbar-card">
    <div class="tw-w-full tw-flex tw-flex-row tw-justify-between tw-items-center">
      <Logo heigth="50px" />
      <div class="tw-flex tw-gap-2">
        <VBtn color="primary">
          Anunciar
        </VBtn>
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import Logo from '../Logo/Logo.vue';



</script>

<style lang="scss" scoped>
.appbar-card {
  padding: 1rem;
  position: absolute;
  top: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 90%;
}
</style>
