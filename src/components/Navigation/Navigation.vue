<template>
  <v-card>
    <v-layout class="tw-h-full">
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" expand-on-hover location="left"
        class="tw-flex tw-flex-col tw-justify-between tw-h-full">
        <v-list-item prepend-avatar="@/assets/main-logo.svg" title="Patinhas amigas" color="red" nav>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Início" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Anúncios" value="anuncios"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Meu usuário" value="account"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2 tw-self-end" v-if="!rail && !isLogged">
            <VBtn text="Entrar" color="primary" block />
          </div>
          <div v-else class="tw-flex tw-items-center tw-p-2">
            <UserCard />
          </div>
        </template>

      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import UserCard from "@/components/UserCard/UserCard.vue"

const drawer = ref<boolean>(true)
const rail = ref<boolean>(true)
const isLogged = ref<boolean>(false)
</script>
