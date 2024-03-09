import { Link, NavLink } from "react-router-dom";
import NavbarAction from "./components/NavbarAction";
import NavbarSeperator from "./components/NavbarSeperator";
import usePopoverDrawer from "../../hooks/usePopoverDrawer";
import Forms from "../Forms";
import { useState } from "react";
import LocaleSwitch from "./components/LocaleSwitch";

export default function Navbar() {
  const drawer = usePopoverDrawer();

  function getStartedAction() {
    drawer.show(<Forms.OrganizationRegistration className="w-1/3" />);
  }

  return (
    <nav className="p-page py-5 flex justify-center items-center fixed w-full z-[10000] bg-background/50 backdrop-blur-sm">
      <div className="flex-1">
        <Link to="/">
          <img src="/brand.svg" className="h-10" />
        </Link>
      </div>

      <div className="flex gap-x-5 items-center">
        <NavbarAction type="link" title="About Us" to="/about" />
        <NavbarSeperator />
        <NavbarAction type="link" title="FAQs" to="/faq" />
        <NavbarSeperator />
        <NavbarAction type="link" title="Dapp" to="/dapp" />
      </div>

      <div className="flex-1 flex items-center gap-x-8 justify-end">
        <LocaleSwitch />
        <button
          className="px-6 py-2 bg-primary text-back rounded-md font-medium"
          onClick={getStartedAction}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
