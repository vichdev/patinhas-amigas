<template>
  <div class="app-text-field flex-grow-1" :class="$attrs.class">
    <VTextField v-bind="{
      ...$attrs,
      class: null,
      label: undefined,
      variant: 'underlined',
      id: elementId,
    }" v-model="modelValueInput" :label="required ? `${label} *` : label" :error-messages="errorMessage"
      v-maska:[maskOptions] :placeholder="placeholder" @update:model-value="updateInputValue" class="tw-p-0"
      :append-inner-icon="appendInnerIcon">
      <template v-slot:append-inner>
        <slot name="append-inner"></slot>
      </template>
    </VTextField>
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
  fontSize: "",
  colorInput: "",
  delayInput: false,
  clickIconAfter: Function,
  inputFocus: false,
  spanErrorAbsolute: false,
  modelValue: "",
  name: ""
});

const emit = defineEmits(["update:modelValue"]);



const modelValueInput = ref<string>(props.modelValue)

const updateInputValue = (value: string): void => {
  emit('update:modelValue', value)
}

const formInput = ref<{ focus?: Function }>({});

const validationRef = ref<string>(props.validationRules);

const maskOptions = reactive({
  mask: () => props.mask,
})


const { value: inputValue, errorMessage } = useField(() => props.name, validationRef, {
  initialValue: () => props.modelValue,
});


watch(() => props.validationRules, (newValue: string): void => {
  validationRef.value = newValue;
});

watch(() => props.inputFocus, (): void => {
  if (formInput.value && formInput.value.focus) {
    formInput.value.focus()
  }
});

watch(() => props.modelValue, (newValue: () => string): void => {
  inputValue.value = newValue
});



const label = computed((): string | undefined => useAttrs().label as string | undefined)

const elementId = computed((): string | undefined => {
  const attrs = useAttrs()
  const _elementIdToken = attrs.id || attrs.label

  return _elementIdToken ? `app-text-field-${_elementIdToken}-${Math.random().toString(36).slice(2, 7)}` : undefined
});

</script>

<style lang="scss" scoped>
.v-input--density-compact {
  --v-input-control-height: 10px !important;
}
</style>
