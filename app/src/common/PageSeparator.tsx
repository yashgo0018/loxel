import React from "react";
import { twMerge } from "tailwind-merge";

interface PageSeparatorProps {
  className?: string;
}

export default function PageSeparator(props: PageSeparatorProps) {
  return (
    <section className="p-page" role="separator">
      <figure
        className={twMerge("border border-front/10 my-10", props.className)}
      />
    </section>
  );
}
