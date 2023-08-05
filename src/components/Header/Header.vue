<template>
  <v-card class="tw-flex tw-flex-row">

    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" expand-on-hover location="right">
        <v-list-item prepend-avatar="@/assets/main-logo.svg" title="Patinhas amigas" color="red" nav>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref<boolean>(true)
const rail = ref<boolean>(true)
</script>
