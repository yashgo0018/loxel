import React from "react";
import Pass from "../../../../common/Pass";
import usePopoverDrawer from "../../../../hooks/usePopoverDrawer";

export default function Passes() {
  const drawer = usePopoverDrawer()

  return (
    <div className="flex flex-col justify-between my-10">
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-primary text-back font-medium rounded-md">Create New Pass</button>
      </div>
    </div>
  );
}
