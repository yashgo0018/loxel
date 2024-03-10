import React from "react";
import DataForm from "../../DataForm";
import CommonFormInput from "../CommonFormInput";
import { twMerge } from "tailwind-merge";
import Pass from "../../Pass";
import Dropdown from "../../Dropdown";

interface PassCreationProps {
  className?: string;
}

export default function PassCreation(props: PassCreationProps) {
  const textureType = ["wood", "glass", "metal", "matte"];
  return (
    <DataForm
      className={twMerge("relative flex items-stretch p-8", props.className)}
    >
      <div className="sticky top-0 basis-1/2 flex flex-col justify-center p-8 h-max">
        <Pass
          className="w-full shadow-lg shadow-front/25"
          data={{
            passName: "Shoppers Black",
            userName: "Spandan Barve",
            colors: {
              primary: "#111111",
              secondary: "#a67c00",
              text: { primary: "#ffffff", secondary: "#000000" },
            },
            textures: { primary: "matte", secondary: "glass" },
            logo: {
              url: "https://watcher.guru/news/wp-content/uploads/2023/12/avax-800x450.jpg.webp",
            },
          }}
        />
      </div>
      <div className="flex flex-col basis-1/2">
        <DataForm className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <p>Select card Texture</p>
            <div className="flex w-full gap-x-4">
              <div className="flex flex-col gap-y-1 w-[49%]">
                <p className="opacity-50 text-sm">Primary Texture</p>
                <select
                  name="Primary"
                  id="primary"
                  className="bg-background border-primary border text-front pl-2 py-2 rounded-md outline-none capitalize"
                >
                  {textureType.map((texture, key) => (
                    <option value={texture} key={key} className="capitalize">
                      {texture}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-y-1 w-[49%]">
                <p className="opacity-50 text-sm">Secondary Texture</p>
                <select
                  name="Primary"
                  id="primary"
                  className="bg-background border-primary border text-front pl-2 py-2 rounded-md outline-none capitalize"
                >
                  {textureType.map((texture, key) => (
                    <option value={texture} key={key} className="capitalize">
                      {texture}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <p>Pass Name</p>
            <CommonFormInput name="passName" type="text" />
          </div>

          <div className="flex flex-col gap-y-1">
            <p>User Name</p>
            <CommonFormInput name="userName" type="text" />
          </div>

          <div className="flex flex-col gap-y-1">
            <p>Provide your logo URL</p>
            <CommonFormInput name="logoUrl" type="text" />
          </div>

          <div className="flex flex-col gap-y-1">
            <p>Select card colors</p>
            <div className="flex gap-x-4 justify-between items-baseline">
              <div className="">
                <p className="text-sm opacity-50">Primary</p>
                <input
                  name="primaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Secondary</p>
                <input
                  name="secondaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Text Primary</p>
                <input
                  name="textPrimaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Text Secondary</p>
                <input
                  name="textSecondaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                />
              </div>
            </div>
          </div>
          <button className="border border-primary px-4 py-1 w-max self-end rounded-md">
            Create
          </button>
        </DataForm>
      </div>
    </DataForm>
  );
}
