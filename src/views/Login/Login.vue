<template>
  <main class="tw-flex tw-h-full tw-items-center tw-justify-center tw-gap tw-bg-primar ">
    <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-full tw-bg-secondary ">
      <Logo />
      <VImg src="@/assets/login-theme.svg" max-width="500" width="100%" height="auto" />
    </div>
    <VCard class="tw-h-full tw-w-full tw-max-w-[40rem] tw-flex-col tw-flex tw-justify-center tw-align-center "
      :title="'Login'" style="padding: 5rem; display: flex; flex-direction: column; justify-content: center;">
      <div class="tw-p-[1rem]">
        <Input v-model:modelValue="email" placeholder="Insira um e-mail" label="E-mail" name="E-mail"
          :validation-rules="'required|email'" required appendInnerIcon="mdi-email" />
        <Input id="senha" label="Senha" v-model:modelValue="password" validation-rules="required"
          :type="passwordInputType" :placeholder="'Digite sua senha'" required>
        <template v-slot:append-inner>
          <v-icon :icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye'" class="tw-cursor-pointer"
            @click="showPasswordAction" />
        </template>
        </Input>
        <Button text="Acessar" block class="tw-mt-2" />
        <VCheckbox label="Lembrar de mim" v-model="remember_me" />

      </div>
      <div class="tw-flex tw-justify-between tw-items-center">
        <RouterLink to="/home"
          class="tw-text-sm tw-opacity-75 tw-self-center tw-text-center tw-cursor-pointer hover:tw-text-gray-81 tw-text-primary">
          Acessar sem login
        </RouterLink>
        <RouterLink to="/cadastro" class="tw-text-sm tw-opacity-75 tw-self-center tw-text-center">
          Novo usuário? <strong class="tw-underline hover:tw-text-gray-81 tw-text-primary tw-cursor-pointer">Cadastre-se
          </strong>
        </RouterLink>
      </div>

    </VCard>
  </main>
</template>

<script lang="ts" setup>
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import Logo from '@/components/Logo/Logo.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

enum EnumIdentification {
  NGO = 0,
  INDIVIDUAL_PERSON = 1
}

const email = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false);
const passwordInputType = ref<'password' | 'text'>('password')
const remember_me = ref<boolean>(false)

const showPasswordAction = (): void => {
  showPassword.value = !showPassword.value;
  passwordInputType.value = showPassword.value ? 'text' : 'password';
}

const identification = ref<EnumIdentification | undefined>(undefined)

const selectIdentification = (identificationValue: EnumIdentification) => {
  identification.value = identificationValue
}



</script>
