import React from "react";

export default function DataForm(
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) {
  const { onSubmit, children, ...otherProps } = props;

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let res: Record<string, string> = {};

    [...data.entries()].forEach((entry) => {
      res[entry[0]] = entry[1] as string;
    });

    onSubmit && onSubmit(event);
  }

  return (
    <form onSubmit={submitHandler} {...otherProps}>
      {children}
    </form>
  );
}
