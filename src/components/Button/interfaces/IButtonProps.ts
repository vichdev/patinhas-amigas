export default interface INpButtonProps {
  text: string;
  rounded?: boolean;
  to?: string;
  variant?: Variants;
  loading?: boolean;
  exact?: boolean;
  disabled?: boolean;
  active?: boolean;
  block?: boolean; // Expands the button to 100% of available space.
  appendIcon?: string; // Creates a v-icon component after default content in the append slot
  prependIcon?: string; // Creates a v-icon component before default content in the append slot
  icon?: boolean | string; // Round the button as a icon, needs to set appendIcon
  ripple?: boolean | { class: string };
}

type Variants =
  | "text"
  | "flat"
  | "elevated"
  | "tonal"
  | "outlined"
  | "plain"
  | undefined;
