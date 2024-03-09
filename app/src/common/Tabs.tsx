import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabsProps {
  tabs: Array<{ title: string }>;
  onChange?: (selectedIndex: number) => void;
}

export default function Tabs(props: TabsProps) {
  const { tabs } = props;
  const tabWidth = `calc((100% - 8px) / ${tabs.length})`;

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    props.onChange && props.onChange(selectedIndex);
  }, [selectedIndex]);

  return (
    <nav className="bg-foreground flex p-1 rounded-md relative">
      {tabs.map((tab, index) => (
        <TabButton
          key={index}
          title={tab.title}
          className={twMerge()}
          onClick={() => {
            setSelectedIndex(index);
          }}
          style={{ width: tabWidth }}
        />
      ))}

      <TabButton
        className="bg-background absolute z-10 text-transparent duration-200"
        title="[]"
        style={{
          width: tabWidth,
          left: `calc(4px + ((100% - 8px) / ${tabs.length}) * ${selectedIndex})`,
        }}
      />
    </nav>
  );
}

function TabButton(props: {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
  onLoad?: React.ReactEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      style={props.style}
      className={twMerge("py-2 rounded-md relative z-20", props.className)}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
