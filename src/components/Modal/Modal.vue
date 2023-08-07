<template>
  <VDialog v-model="isDialogVisible" :width="widthModal" :persistent="persistent" :scrollable="scrollable"
    @update:model-value="() => {
      emits('close', false);
    }
      ">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="closeDialog" />

    <!-- Dialog Content -->
    <VCard>
      <v-toolbar :height="heightHeaderModal" :color="backgroundHeaderModal" :title="modalTitle" />

      <VCardText>
        <slot name="body-modal">
          <p>Default body</p>
        </slot>
      </VCardText>

      <VDivider v-if="isDivider" :class="[`border-opacity-${dividerOpacity}`]" :color="dividerColor" />

      <v-card-actions class="py-3 px-5" :class="`justify-${justifyFooterButton}`">
        <slot v-if="isButtonSecondary" name="button-secondary">
          <NpButton :text="textButtonSecondary" color="secondary" @click="() => {
            emits('emitSecondaryButton');
            emits('close');
          }
            " />
        </slot>
        <slot v-if="isButtonPrimary" name="button-primary">
          <NpButton :text="textButtonPrimary" @click="() => {
            emits('emitPrimaryButton');
          }
            " />
        </slot>
      </v-card-actions>
    </VCard>
  </VDialog>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import type IModalProps from "./interfaces/IModalProps";

const isDialogVisible = ref<boolean>(false);

const props = withDefaults(defineProps<IModalProps>(), {
  modalTitle: "Title",
  widthModal: "565",
  persistent: false,
  scrollable: false,
  showModal: false,
  dividerColor: undefined,
  dividerOpacity: "10",
  isDivider: false,
  isButtonSecondary: true,
  textButtonSecondary: "Cancelar",
  textButtonPrimary: "Confirmar",
  isButtonPrimary: true,
  heightHeaderModal: "44",
  backgroundHeaderModal: "#f8f8f8",
  justifyFooterButton: "end",
});

const emits = defineEmits([
  "close",
  "emitSecondaryButton",
  "emitPrimaryButton",
]);

watch(
  () => props.showModal,
  (val: boolean): void => {
    isDialogVisible.value = val;
  }
);

const closeDialog = (): void => {
  isDialogVisible.value = false;
  emits("close", false);
};
</script>
