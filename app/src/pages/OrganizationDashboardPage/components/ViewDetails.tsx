import Icon from "../../../common/Icon";

export default function ViewDeatils(props: {
  className?: string;
  data: {
    label: React.ReactNode;
    buttonLabel: React.ReactNode;
    onClickFunction?: React.MouseEventHandler;
    description?: string;
    searchBarQuery?: string;
  };
}) {
  return (
    <div className={props.className}>
      <div className="flex items-center gap-x-4 justify-between">
        <button className="flex gap-x-1 items-center justify-center text-md border px-4 py-2 rounded-md border-primary duration-150 ease-in" onClick={props.data.onClickFunction}>
          {props.data.buttonLabel}
        </button>
        <p className="opacity-60 flex items-center gap-x-2">
          {props.data.label}
        </p>
      </div>
      {props.data.searchBarQuery && (
        <div className="flex items-center gap-x-2 border border-front/20 px-2 rounded-md min-w-[40%]">
          <Icon icon="search" className="text-[1.5rem]" />
          <input className="outline-none border-none" placeholder={props.data.searchBarQuery} />
        </div>
      )}{" "}
    </div>
  );
}
