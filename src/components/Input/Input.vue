<template>
  <div class="app-text-field flex-grow-1" :class="$attrs.class">
    <VLabel v-if="label" :for="elementId" class="mb-1 text-high-emphasis" :text="label" />
    <VTextField v-bind="{
      ...$attrs,
      class: null,
      label: undefined,
      variant: 'outlined',
      id: elementId,
    }" v-model="computedValue" :error-messages="errorMessage" v-maska:[maskOptions] />
  </div>
</template>

<script lang="ts" setup>
//Libs
import { vMaska } from "maska";
import { useField } from "vee-validate";
//Interfaces
import type IInputProps from "./interfaces/IInputProps";
import { reactive, ref, watch, computed, useAttrs } from "vue";

defineOptions({
  name: 'NpInput',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IInputProps>(), {
  labelClass: "tw-text-[12px]",
  fontSize: "",
  colorInput: "",
  delayInput: false,
  clickIconAfter: Function,
  inputFocus: false,
  spanErrorAbsolute: false,
  name: ""
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get(): string {
    return props.modelValue;
  },
  set(value: string): void {
    emit('update:modelValue', value)
  }
});


const formInput = ref<{ focus?: Function }>({});
const validationRef = ref<string | (() => string)>(() => props.validationRules);
const maskOptions = reactive({
  mask: () => props.mask,
})


const { value: inputValue, errorMessage } = useField(() => props.name, validationRef, {
  initialValue: () => props.modelValue,
});


watch(() => props.validationRules, (newValue): void => {
  validationRef.value = newValue;
});

watch(() => props.inputFocus, (): void => {
  if (formInput.value && formInput.value.focus) {
    formInput.value.focus()
  }
});

watch(() => props.modelValue, (newValue): void => {
  inputValue.value = newValue
});



const label = computed(() => useAttrs().label as string | undefined)

const elementId = computed(() => {
  const attrs = useAttrs()
  const _elementIdToken = attrs.id || attrs.label

  return _elementIdToken ? `app-text-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : undefined
});

</script>

<style lang="scss" scoped>
.v-input--density-compact {
  --v-input-control-height: 30px !important;
}
</style>
