import React from "react";
import Icon from "../../../../common/Icon";
import ViewDetails from "../../components/ViewDetails";
import Coupon from "../../../../common/Coupon";

export default function benefitsView() {
  // function createPassAction() {
  //   drawer.show(<Forms.PassCreation className="w-2/3" />);
  // }
  return (
    <article className="py-6 flex flex-col gap-y-6">
      <ViewDetails data={data} className="flex justify-between w-full" />
      <div className="flex h-full flex-wrap justify-between gap-y-10">
        {dummyPasses.map((passData, key) => (
          <Coupon data={passData} key={key} className="w-[30vw]" />
        ))}
      </div>
    </article>
  );
}

const data = {
  label: (
    <>
      4 / 100 benefits Created
      <Icon icon="help" className="text-[1.3rem]" />
    </>
  ),
  buttonLabel: (
    <>
      Add New Benefit
      <span>
        <Icon icon="add" className="text-[1rem]" />
      </span>
    </>
  ),
};

const dummyPasses = [
  {
    passName: "$50 Off",
    userName: "Purchase Value :\n$500 or above",
    colors: {
      primary: "#6c736d",
      secondary: "#d03d4d",
      text: { primary: "#fefefe", secondary: "#fefefe" },
    },
    textures: { primary: "feather", secondary: "glass" },
    logo: {
      url: "https://i.pinimg.com/originals/41/e8/20/41e82046cd52130a111049ea560cfbda.png",
    },
    expiry: 1834066743000,
    usage: { total: 10, used: 2 },
  },
  {
    passName: "Flat 15% off",
    userName: "Use this coupon across marsian.shop",
    colors: {
      primary: "#e13e14",
      secondary: "#000",
      text: { primary: "#ffffff", secondary: "#fefefe" },
    },
    textures: { primary: "america", secondary: "glass" },
    logo: {
      url: "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg",
    },
    expiry: 1830066943000,
    usage: { total: 10, used: 6 },
  },

  {
    passName: "5% off",
    userName: "Valid on all purchases\nover $20 on parent site",
    colors: {
      primary: "#3d7d7d",
      secondary: "#30d2e2",
      text: { primary: "#000000", secondary: "#000000" },
    },
    textures: { primary: "bubble", secondary: "hyper" },
    logo: {
      url: "https://styles.redditmedia.com/t5_ild9e/styles/communityIcon_8ikf8h653cac1.png",
    },
    expiry: 1930066943000,
    usage: { total: 10, used: 5 },
  },
  {
    passName: "$15 off",
    userName: "Purchase items worth $150",
    colors: {
      primary: "#000000",
      secondary: "#a4861f",
      text: { primary: "#ffffff", secondary: "#000000" },
    },
    textures: { primary: "jaipur", secondary: "hyper" },
    logo: {
      url: "https://styles.redditmedia.com/t5_ild9e/styles/communityIcon_8ikf8h653cac1.png",
    },
    expiry: 1930066943000,
    usage: { total: 10, used: 5 },
  },
] as const;
