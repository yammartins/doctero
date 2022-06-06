import { Props } from "react-input-mask";

export type InputHandles = JSX.IntrinsicElements["input"] & JSX.IntrinsicElements["textarea"];

export interface BaseHandles extends Omit<Props, "value" | "mask"> {
  icon?: string;
  full?: boolean;
  placeholder?: string;
  fieldName: string;
  label?: string;
  how?: "input" | "textarea" | "default";
  mask?: Props["mask"];
  cols?: number;
  rows?: number;
  className?: string;
}

export type FormProps = BaseHandles & InputHandles & {
  name: string;
};
