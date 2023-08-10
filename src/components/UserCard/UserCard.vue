<template>
  <div>
    <v-avatar color="primary">
      {{ isLogged ? dividedName : '' }}
      <VIcon v-if="!isLogged" icon="mdi-account" color="white">mdi-account</VIcon>
    </v-avatar>
    <span v-if="false">
      Bem vindo, {{ user.name }}
    </span>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const getInitials = (name: string) => {
  let names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

const isLogged = ref<boolean>(false)


const user = ref<{ name: string }>({
  name: "Victor Hugo"
})

const dividedName = getInitials(user.value.name)



</script>
