import ReactInputMask, { Props } from "react-input-mask";

export type InputHandles = JSX.IntrinsicElements["input"] &
  JSX.IntrinsicElements["textarea"] &
  Props;

export type InputElementProps = InputHandles & ReactInputMask;

export type InputProps = Omit<InputHandles, "mask" | "value"> & {
  mask?: Props["mask"];
  icon?: string;
  full?: boolean;
  fieldName?: string;
  label?: string;
  how?: "input" | "textarea" | "default";
};

export type FormProps = InputProps & {
  name: string;
};
