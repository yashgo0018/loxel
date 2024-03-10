import React from "react";
import Pass from "../../../../common/Pass";
import usePopoverDrawer from "../../../../hooks/usePopoverDrawer";
import { PassData } from "../../../../types";
import Forms from "../../../../common/Forms";
import Icon from "../../../../common/Icon";
import ViewDeatils from "../../components/ViewDetails";

export default function PassesView() {
  const drawer = usePopoverDrawer();

  const passes = dummyPasses;

  function createPassAction() {
    drawer.show(<Forms.PassCreation className="w-2/3" />);
  }

  const ViewDetailsData = {
    buttonLabel: (
      <>
        Create New Pass
        <span>
          <Icon icon="add" className="text-[1rem]" />
        </span>
      </>
    ),
    label: (
      <div className="flex flex-col">
        <h1 className="font-medium">Passes : {passes.length} / 100</h1>
        <p className="text-xs text-front/60">
          Each pass you issue represents the level of involvement of a user with
          your brand.<br/> Passes are required in order to avail benifits.
        </p>
      </div>
    ),
    searchBarQuery: "Search for your passes...",
    onClickFunction: createPassAction,
  };

  return (
    <article className="flex flex-col gap-y-6">
      <ViewDeatils
        className="flex w-full my-10 gap-x-8 justify-between"
        data={ViewDetailsData}
      />
      <div className="flex h-full flex-wrap justify-between gap-y-10">
        {dummyPasses.map((passData, key) => (
          <Pass data={passData} key={key} className="w-[30vw]" />
        ))}
      </div>
    </article>
  );
}

const dummyPasses: PassData[] = [
  {
    passName: "Youtube Kids",
    userName: "Spandan Barve",
    colors: {
      primary: "#6c736d",
      secondary: "#0d751d",
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
    passName: "Youtube Advanced",
    userName: "Riya Jain",
    colors: {
      primary: "#101010",
      secondary: "#b00b1f",
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
    passName: "Youtube premium",
    userName: "Yash Card",
    colors: {
      primary: "#0d0d0d",
      secondary: "#a4861f",
      text: { primary: "#ffffff", secondary: "#000000" },
    },
    textures: { primary: "metal", secondary: "hyper" },
    logo: {
      url: "https://styles.redditmedia.com/t5_ild9e/styles/communityIcon_8ikf8h653cac1.png",
    },
    expiry: 1930066943000,
    usage: { total: 10, used: 5 },
  },
];
