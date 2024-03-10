import React from "react";

export default function DataForm(
  props: Omit<
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >,
    "onChange" | "onSubmit"
  > & {
    onChange?: (data: Record<string, string>) => void;
    onSubmit?: (data: Record<string, string>) => void;
  },
) {
  const { onSubmit, onChange, children, ...otherProps } = props;

  function dataEvent(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let res: Record<string, string> = {};

    [...data.entries()].forEach((entry) => {
      res[entry[0]] = entry[1] as string;
    });

    onSubmit && onSubmit(res);
    onChange && onChange(res);
  }

  return (
    <form onSubmit={dataEvent} onChange={dataEvent} {...otherProps}>
      {children}
    </form>
  );
}
