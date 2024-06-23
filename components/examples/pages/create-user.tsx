import React from "react";
import { Form } from "hookform-field";
import Field from "../components/form/field";
import Data from "./data";

export interface CreateUserPageProps {}

const CreateUserPage = (props: CreateUserPageProps) => {
  return (
    <Form className="dark:bg-neutral-900 p-5 rounded-lg mt-6 flex flex-col gap-2">
      <Field
        name="firstName"
        label="First name"
        component="text" // "text" | "number" | "select" type created
        placeholder="Enter first name"
      />
      <Field
        name="lastName"
        label="Last name"
        component="text" // "text" | "number" | "select" type created
        placeholder="Enter last name"
      />
      <Field
        name="age"
        label="Age"
        component="select" // "text" | "number" | "select" type created
        options={[
          // type-safe, as TypeScript will require you to render the options prop because it is required
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
        ]}
        placeholder="Select age"
      />

      <Data />
    </Form>
  );
};

export default CreateUserPage;
