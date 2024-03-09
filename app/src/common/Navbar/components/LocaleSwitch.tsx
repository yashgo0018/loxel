import React, { useState } from "react";
import useLocale from "../../../hooks/useLocale";
import Icon from "../../Icon";
import { twMerge } from "tailwind-merge";
import { locales } from "../../../config";

export default function LocaleSwitch() {
  const { current, set: setLocale } = useLocale();
  const [showingOptions, setShowingOptions] = useState(false);

  return (
    <div className="relative">
      <button
        className="lowercase flex gap-x-1 items-center relative"
        onClick={() => {
          setShowingOptions((b) => !b);
        }}
      >
        {current.locale}{" "}
        <Icon
          icon="expand_more"
          className={twMerge("duration-100", showingOptions && "-rotate-180")}
        />
      </button>

      <div
        className={twMerge(
          "absolute w-max left-1/2 -translate-x-1/2 top-[150%] flex flex-col duration-200 bg-background origin-top",
          showingOptions ? "" : "pointer-events-none opacity-0 scale-y-0"
        )}
      >
        {locales.map((loc, key) => (
          <button
            key={key}
            className="px-4 py-2 flex gap-x-2 items-center border border-front/15 lowercase duration-150 hover:bg-foreground"
            onClick={() => {
              setLocale(loc.locale);
              setShowingOptions(false);
            }}
          >
            <img
              src={loc.icon}
              alt={loc.locale}
              className="h-[0.7em] object-cover aspect-video"
            />
            {loc.locale}
          </button>
        ))}
      </div>
    </div>
  );
}
