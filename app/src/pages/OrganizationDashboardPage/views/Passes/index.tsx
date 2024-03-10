import React from "react";
import Pass from "../../../../common/Pass";
import usePopoverDrawer from "../../../../hooks/usePopoverDrawer";
import { PassData } from "../../../../types";
import Forms from "../../../../common/Forms";
import Icon from "../../../../common/Icon";
import ViewDeatils from "../../components/ViewDetails";

export default function Passes() {
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
          your brand. Passes are required in order to avail benifits.
        </p>
      </div>
    ),
    onClickFunction: createPassAction,
  };

  return <ViewDeatils className="flex w-full my-10" data={ViewDetailsData} />;
}

const dummyPasses: PassData[] = [];
