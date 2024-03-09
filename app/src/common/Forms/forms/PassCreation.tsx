import React from "react";
import DataForm from "../../DataForm";
import CommonFormInput from "../CommonFormInput";
import { twMerge } from "tailwind-merge";

interface PassCreationProps {
  className?: string;
}

export default function PassCreation(props: PassCreationProps) {
  return (
    <DataForm
      className={twMerge("flex flex-col items-stretch p-8", props.className)}
    >
      <CommonFormInput name="S" placeholder="S" />
      <CommonFormInput name="" />
      <CommonFormInput name="" />
    </DataForm>
  );
}
