import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import DataForm from "../../DataForm";
import CommonFormInput from "../CommonFormInput";

interface OrganizationRegistrationProps {
  className?: string;
}

export default function OrganizationRegistration(
  props: OrganizationRegistrationProps
) {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <DataForm
      className={twMerge("flex flex-col items-stretch p-8", props.className)}
    >
      <h1 className="font-semibold tracking-tight text-3xl text-center">
        Register Your Organization
      </h1>

      <img
        className="w-1/3 aspect-square self-center rounded-full object-cover outline outline-front/20 outline-offset-2 mt-6"
        src={imgUrl}
        onError={(e) =>
          (e.currentTarget.src =
            "https://www.coherentmarketinsights.com/images/testimg/defultlogo.jpg")
        }
      />

      <CommonFormInput
        name="organizationName"
        placeholder="Organization Name"
        label="This is how you will be known on Loxel"
        required
      />

      <CommonFormInput
        name="organizationImage"
        placeholder="Image"
        onChange={(e) => setImgUrl(e.target.value)}
        label="Provide url to the display picture for your organization"
        required
      />

      <CommonFormInput
        name="organizationEmail"
        placeholder="Eg: admin@yourbrand.com"
        label="Email will be used to login and in case you forget your credentials"
        required
      />

      <CommonFormInput
        name="organizationWebsite"
        placeholder="Website  (www.yourstore.com)"
        label="This could be your brand's homepage or web store"
        required
      />

      <CommonFormInput
        name="organizationSells"
        placeholder="What is your business  (Eg: Footwear, Cafe, etc.)"
        label="We collect this info for analytics purpose"
      />

      <CommonFormInput
        name="organizationCountry"
        placeholder="Country"
        label="You can register different organizations for different countries"
        required
      />

      <div className="flex mt-8 gap-x-2">
        <input type="checkbox" name="countryLock" />
        <label htmlFor="countryLock" className="text-sm font-light">
          Do you want to restrict reward usage / redemption to be only available
          within registered country?
        </label>
      </div>

      <button className="mt-10 bg-primary px-6 py-3 font-medium text-back rounded mb-10">
        Register
      </button>
    </DataForm>
  );
}
