import Icon from "../../../../../common/Icon";
import LineChart from "../../../../../common/LineChart";

export default function ApiCard() {
  return (
    <div className="flex items-start border border-front/20 shadow-lg shadow-front/10 px-4 py-6 gap-x-4 w-[45%] rounded-md">
      <Icon icon="edit" className="text-xl flip-horizontal" />
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-x-2">
          <h1 className="text-xl">Castise Name</h1>
          <span className="text-sm italic text-front/40">
            Modiefied less than a minute ago
          </span>
        </div>
        <div className="flex flex-col w-full gap-x-8">
          <div className="flex h-max my-4">
            <input
              className="rounded-l-md rounded-r-none duration-300 ease-in text-xl px-4 truncate w-full"
              disabled
              readOnly
              type="password"
              value={"asdknajsdnajkfsdfjdsnfjkdkbdkasd"}
            />
            <button className="text-[1.5rem] border px-2 border-primary/80 text-primary/80">
              <Icon icon="eye" />
            </button>
            <button className="text-[1.5rem] border px-2 border-primary/80 rounded-r-md text-primary/80">
              <Icon icon="contentCopy" />
            </button>
          </div>

          <LineChart data={dummybenefitsClaimed} className="w-3/5 self-center" />
        </div>
      </div>
    </div>
  );
}

const dummybenefitsClaimed = {
  labels: [
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
  ],
  values: [13000, 7000, 10000, 37000, 22000, 14000, 26000, 1000],
};
