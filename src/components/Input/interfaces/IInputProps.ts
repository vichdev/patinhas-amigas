export default interface IInputProps {
  labelClass?: string;
  icon?: string;
  iconBefore?: boolean;
  iconAfter?: boolean;
  iconAfterDefault?: boolean;
  mask?: string | string[];
  moneyOptions?: Object;
  size?: number;
  fontSize?: string;
  required?: boolean;
  colorInput?: string;
  clickIconAfter?: Function;
  bottomValidation?: false;
  errorMessage?: string;
  placeholder?: string;
  inputFocus?: boolean;
  spanErrorAbsolute?: boolean;
  modelValue: string;
  name?: string;
  validationRules: string;
  appendInnerIcon?: string;
}
