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
  colorInput?: string;
  clickIconAfter?: Function;
  bottomValidation?: false;
  errorMessage?: string;
  inputFocus?: boolean;
  spanErrorAbsolute?: boolean;
  modelValue: string | (() => string);
  name?: string;
  validationRules: string;
}
