import React from "react";

export interface SelectInputProps
  extends React.ComponentPropsWithoutRef<"select"> {
  options: { label: string; value: any }[];
}

const SelectInput = React.forwardRef<
  React.ElementRef<"select">,
  SelectInputProps
>(({ options = [], ...props }, ref) => {
  return (
    <select {...props} ref={ref}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default SelectInput;
