<template>
  <div class="tw-flex tw-items-center">
    <VImg src="@/assets/main-logo.svg" :width="width" max-width="100" :height="heigth" />
    <h1 class="tw-text-xxl" v-if="withText">Patinhas amigas</h1>
    <v-icon icon="mdi-user-star" color="white">mdi-user-star</v-icon>

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
