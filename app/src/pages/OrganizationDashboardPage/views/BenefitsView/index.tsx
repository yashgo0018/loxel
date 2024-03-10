import React from "react";
import Icon from "../../../../common/Icon";
import ViewDetails from "../../components/ViewDetails";

export default function benefitsView() {
  // function createPassAction() {
  //   drawer.show(<Forms.PassCreation className="w-2/3" />);
  // }
  return (
    <article className="py-6 flex flex-col gap-y-6">
      <ViewDetails data={data} className="flex justify-between w-full" />
    </article>
  );
}

const data = {
  label: (
    <>
      2 / 100 benefits Created
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
