<template>
  <div class="tw-flex tw-items-center">
    <VImg src="@/assets/main-logo.svg" width="100" max-width="100" height="100" />
    <h1 class="tw-text-xxl" v-if="withText">Patinhas amigas</h1>
  </div>
</template>

<script setup lang="ts">
import type ILogoProps from './interfaces/ILogoProps';

withDefaults(defineProps<ILogoProps>(), {
  width: "100",
  heigth: "auto",
  withText: true,
})

</script>
