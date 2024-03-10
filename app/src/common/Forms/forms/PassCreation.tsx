import React from "react";
import DataForm from "../../DataForm";
import CommonFormInput from "../CommonFormInput";
import { twMerge } from "tailwind-merge";
import Pass from "../../Pass";

interface PassCreationProps {
  className?: string;
}

export default function PassCreation(props: PassCreationProps) {
  return (
    <DataForm
      className={twMerge("relative flex items-stretch p-8", props.className)}
    >
      <div className="sticky top-0 basis-1/2 flex flex-col justify-center p-8 h-max">
        <Pass
          className="w-full shadow-lg shadow-front/25"
          data={{
            name: "Shoppers Black",
            colors: { primary: "#111111", secondary: "#a67c00" },
            textures: { primary: "matte", secondary: "glass" },
            logo: {
              url: "https://watcher.guru/news/wp-content/uploads/2023/12/avax-800x450.jpg.webp",
            },
          }}
        />
      </div>
      <div className="flex flex-col basis-1/2">
        <CommonFormInput className="mt-8" name="S" placeholder="S" label="sd" />
      </div>
    </DataForm>
  );
}
