import { twMerge } from "tailwind-merge";

type CommonFormInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string };

export default function CommonFormInput(props: CommonFormInputProps) {
  const { label, className, ...otherProps } = props;

  return (
    <div className="relative flex flex-col items-stretch">
      <input className={twMerge(className)} {...otherProps} />

      {props.required && (
        <span className="absolute text-red-500 right-1 top-1/2 -translate-y-1/2">
          *
        </span>
      )}

      {label && (
        <label htmlFor={props.name} className="text-xs text-front/40 mt-2">
          {label}
        </label>
      )}
    </div>
  );
}
