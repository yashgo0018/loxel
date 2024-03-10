import React from "react";
import useLocale from "../hooks/useLocale";

interface FormattedDateProps {
  timestamp: number;
  className?: string;
}

export default function FormattedDate(props: FormattedDateProps) {
  const { current } = useLocale();

  const formatter = new Intl.DateTimeFormat(current.locale, {
    dateStyle: "medium",
    timeZone: "Australia/Sydney",
  });

  return (
    <span className={props.className}>{formatter.format(props.timestamp)}</span>
  );
}
