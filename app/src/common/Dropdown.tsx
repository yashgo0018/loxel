import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  defaultIndex?: number;
  placeholder?: string;
  name?: string;
  onChange?: (event: { value: string }) => void;
}

function Container(props: ContainerProps) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(props.defaultIndex || 0);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  let items =
    React.Children.map(props.children, (child) => {
      if (React.isValidElement(child)) return `${child.props.children}`;
    }) || [];

  useClickOutside(ref, () => setOpen(false));

  function handleOptionClick(index: number) {
    setOpen(false);
    setSelectedIndex(index);
  }

  useEffect(() => {
    selectedIndex < 0 && setSelectedIndex(0);
  }, [selectedIndex]);

  useEffect(() => {
    props.onChange && props.onChange({ value: items[selectedIndex] });
  }, [selectedIndex]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={twMerge(
          "flex items-center justify-center duration-inherit",
          props.className
        )}
      >
        {`${items[selectedIndex] || props.placeholder}`}
        <Icon
          icon="expand_more"
          className={twMerge(
            "pt-[3px] ml-2 scale-150 duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <>
        <div
          className={twMerge(
            "flex flex-col left-1/2 -translate-x-1/2 z-10 duration-300 absolute top-full"
          )}
          style={{
            clipPath: !open
              ? "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)"
              : "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
          }}
        >
          {React.Children.map(props.children, (child, index) => {
            if (React.isValidElement(child) && child.type === Option)
              return React.cloneElement(child as React.ReactElement, {
                index,
                onClick: () => handleOptionClick(index),
                isSelected: index === selectedIndex,
              });
          })}
        </div>
      </>
    </div>
  );
}

interface OptionProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  isSelected?: boolean;
}

function Option(props: OptionProps) {
  return (
    <button
      className={twMerge("", props.className, props.isSelected && "bg-primary")}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

const Dropdown = { Container, Option };

export default Dropdown;
