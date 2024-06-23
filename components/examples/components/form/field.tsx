import React from "react";
import { createField } from "hookform-field";

const TextInput = React.lazy(() => import("../ui/input"));
const NumberInput = React.lazy(() => import("../ui/number"));
const Select = React.lazy(() => import("../ui/select"));

const Field = createField(
  {
    text: TextInput,
    number: NumberInput,
    select: Select,
  },
  {
    classNames: {
      root: "flex flex-col",
      input: "h-10 px-4 rounded-md",
      message: "text-sm",
      description: "text-sm",
      label: "text-sm leading-normal mb-1",
    },
  }
);

export default Field;
