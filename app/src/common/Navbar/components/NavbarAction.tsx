import React from "react";
import { NavLink } from "react-router-dom";

export type NavbarActionProps = {
  children?: React.ReactNode;
  to: string;
  className?: string;
} & (
  | {
      type: "link";
      title: string;
    }
  | {
      type: "dropdown";
      element: React.ReactNode;
    }
);

export default function NavbarAction(props: NavbarActionProps) {
  return (
    <NavLink to={props.to} className="text-base font-normal">
      <>
        {props.type === "link" && <span>{props.title}</span>}

        {props.type === "dropdown" && <span>{props.element}</span>}
      </>
    </NavLink>
  );
}
