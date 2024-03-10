import React from "react";
import DataForm from "../../DataForm";
import CommonFormInput from "../CommonFormInput";
import { twMerge } from "tailwind-merge";
import Dropdown from "../../Dropdown";
import { PassData } from "../../../types";
import { useState } from "react";
import { passPlaceholderData } from "../../../config";
import { TextureType, getTextureTypeArray } from "../../../config/textures";
import Pass from "../../Pass";
import Wrapper3dHover from "../../Wrapper3dHover";

interface PassCreationProps {
  className?: string;
}

export default function PassCreation(props: PassCreationProps) {
  const textureType = getTextureTypeArray();

  const [passData, setPassData] = useState<PassData>(passPlaceholderData);

  return (
    <div
      className={twMerge("relative flex items-stretch p-8", props.className)}
    >
      <div className="sticky top-0 basis-1/2 flex flex-col justify-center p-8 h-max">
        <Wrapper3dHover className="duration-75">
          <Pass className="w-full" data={passData} />
        </Wrapper3dHover>
      </div>
      <div className="flex flex-col basis-1/2">
        <DataForm
          className="flex flex-col gap-y-6"
          onChange={(data) => {
            setPassData((p) => ({
              ...p,
              colors: {
                primary: data.primaryColor,
                secondary: data.secondaryColor,
                text: {
                  primary: data.textPrimaryColor,
                  secondary: data.textSecondaryColor,
                },
              },
              textures: {
                primary: data.primaryTexture as TextureType,
                secondary: data.secondaryTexture as TextureType,
              },
              passName: data.passName,
              logo: {
                url: data.logoUrl,
              },
            }));
          }}
        >
          <div className="flex flex-col gap-y-1">
            <p>Select card Texture</p>
            <div className="flex w-full gap-x-4">
              <div className="flex flex-col gap-y-1 w-[49%]">
                <p className="opacity-50 text-sm">Primary Texture</p>
                <select
                  name="primaryTexture"
                  id="primary-texture"
                  defaultValue="matte"
                  className="bg-background border-front/25 focus:border-primary border text-front pl-2 py-2 rounded-md outline-none capitalize"
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
                  name="secondaryTexture"
                  id="secondary-texture"
                  className="bg-background border-front/25 focus:border-primary border text-front pl-2 py-2 rounded-md outline-none capitalize"
                  defaultValue="glass"
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
            <CommonFormInput
              name="passName"
              type="string"
              defaultValue={passData.passName}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <p>Provide your logo URL</p>
            <CommonFormInput
              name="logoUrl"
              type="text"
              defaultValue={passData.logo.url}
            />
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
                  defaultValue={passData.colors.primary}
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Secondary</p>
                <input
                  name="secondaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                  defaultValue={passData.colors.secondary}
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Text Primary</p>
                <input
                  name="textPrimaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                  defaultValue={passData.colors.text.primary}
                />
              </div>
              <div className="">
                <p className="text-sm opacity-50">Text Secondary</p>
                <input
                  name="textSecondaryColor"
                  className="p-0 border-none size-10"
                  type="color"
                  defaultValue={passData.colors.text.secondary}
                />
              </div>
            </div>
          </div>
          <button className="border border-primary px-4 py-1 w-max self-end rounded-md">
            Create
          </button>
        </DataForm>
      </div>
    </div>
  );
}
