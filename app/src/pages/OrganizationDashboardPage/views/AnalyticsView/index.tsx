import React from "react";
import BarGraph from "../../../../common/BarGraph";
import LineChart from "../../../../common/LineChart";
import UsersTable from "./components/UsersTable";

export default function AnalyticsView() {
  return (
    <article className="py-6 flex flex-col gap-y-6">
      <div className="flex gap-x-6">
        <div className="flex-1 p-10 rounded-2xl border border-front/15 flex flex-col">
          <h3 className="mb-1 font-semibold">Passes Issued</h3>
          <span className="mb-8 text-sm text-front/40">
            +27% from last month
          </span>
          <BarGraph data={dummyIssuedPasses} />
        </div>

        <div className="flex-1 p-10 rounded-2xl border border-front/15 flex flex-col">
          <h3 className="mb-1 font-semibold">Benifits Claimed</h3>
          <span className="mb-8 text-sm text-front/40">
            +300% from last month
          </span>
          <LineChart data={dummyBenifitsClaimed} />
        </div>
      </div>

      <div className="flex-1 p-10 rounded-2xl border border-front/15 flex flex-col">
        <h3 className="mb-1 font-semibold">Registered Customers</h3>
        <span className="mb-8 text-sm text-front/40">
          Manage your customers
        </span>
        <UsersTable />
      </div>
    </article>
  );
}

const dummyIssuedPasses = {
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
  values: [3, 10, 20, 17, 32, 44, 56, 30],
};

const dummyBenifitsClaimed = {
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
