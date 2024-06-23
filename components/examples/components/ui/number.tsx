import React from "react";

export interface NumberInputProps
  extends React.ComponentPropsWithoutRef<"input"> {}

const NumberInput = React.forwardRef<
  React.ElementRef<"input">,
  NumberInputProps
>((props, ref) => {
  return <input {...props} ref={ref} type="number" />;
});

export default NumberInput;
