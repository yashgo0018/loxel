import Icon from "../../../common/Icon";

export default function ViewDeatils(props: {
  className?: string;
  data: {
    label: React.ReactNode;
    buttonLabel: React.ReactNode;
    onClickFunction?: Function;
    description?: string;
    searchBarQuery?: string;
  };
}) {
  return (
    <div className={props.className}>
      <div className="flex items-center gap-x-4">
        <button className="flex gap-x-1 items-center justify-center text-md border-primary/40 border hover:border-primary/80 px-4 py-2 rounded-md bg-primary/5 hover:bg-primary/0 duration-150 ease-in">
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
