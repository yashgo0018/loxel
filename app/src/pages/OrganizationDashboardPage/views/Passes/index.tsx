import React from "react";
import Pass from "../../../../common/Pass";
import usePopoverDrawer from "../../../../hooks/usePopoverDrawer";
import { PassData } from "../../../../types";
import Forms from "../../../../common/Forms";
import Icon from "../../../../common/Icon";

export default function Passes() {
  const drawer = usePopoverDrawer();

  const passes = dummyPasses;

  function createPassAction() {
    drawer.show(<Forms.PassCreation className="w-2/3" />);
  }

  return (
    <div className="flex flex-col justify-between my-10">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-medium">Passes : {passes.length} / 100</h1>
          <p className="text-xs text-front/60">
            Each pass you issue represents the level of involvement of a user
            with your brand. Passes are required in order to avail benifits.
          </p>
        </div>
        <button className="px-6 py-3 border border-primary text-front font-medium rounded-md flex items-center gap-x-2" onClick={createPassAction}>
          {/* {`<Icon icon="add" />`}  */}
          +
             Create New Pass
        </button>
      </div>
    </div>
  );
}

const dummyPasses: PassData[] = [];
