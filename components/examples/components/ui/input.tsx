import React from "react";

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<"input"> {}

const TextInput = React.forwardRef<React.ElementRef<"input">, TextInputProps>(
  (props, ref) => {
    return <input {...props} ref={ref} type="text" />;
  }
);

export default TextInput;
