import Icon from "../../../common/Icon";

export default function ViewDeatils() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <button className="flex gap-x-1 items-center justify-center text-md border-primary/40 border hover:border-primary/80 px-4 py-2 rounded-md bg-primary/5 hover:bg-primary/0 duration-150 ease-in">
          <span>
            <Icon icon="add" className="text-[1rem]" />
          </span>
          New API Key
        </button>
        <p className="opacity-60 flex items-center gap-x-2">
          5 / 100 API Keys
          <Icon icon="help" className="text-[1.3rem]" />
        </p>
      </div>
      <div className="flex items-center gap-x-2 border border-front/20 px-2 rounded-md min-w-[40%]">
        <Icon icon="search" className="text-[1.5rem]" />
        <input className="outline-none border-none" />
      </div>
    </div>
  );
}
