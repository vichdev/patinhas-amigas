<template>
  <v-main class="tw-relative tw-flex tw-items-center tw-justify-center">
    <Appbar class="tw-self-center" />
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import Appbar from '@/components/Appbar/Appbar.vue';

</script>
