import React, { useEffect, useState } from "react";
import { TupleToUnion } from "../../../../../types";
import FormattedCurrency from "../../../../../common/FormattedCurrency";
import Icon from "../../../../../common/Icon";
import { twMerge } from "tailwind-merge";

export default function UsersTable() {
  const titles = ["Email", "Passes", "Benifits Availed"] as const;
  type DataEntry = Record<TupleToUnion<typeof titles>, React.ReactNode>;

  const [formattedData, setFormattedData] = useState<Array<DataEntry>>();
  const [selectedIndices, setSelectedIndices] = useState<
    Record<number, boolean>
  >({});

  function toggleSelect(idx: number) {
    setSelectedIndices((p) => ({ ...p, [idx]: !isSelected(idx) }));
  }
  function isSelected(idx: number) {
    return selectedIndices[idx] ? true : false;
  }
  function selectAll(idx: number) {
    const res = formattedData?.map((_, i) => ({ [i]: true }));
    if (!res) return;
    setSelectedIndices(res as any);
  }

  const users = dummyUsers;

  useEffect(() => {
    let mData: Array<DataEntry> = [];

    users.forEach((user) => {
      let entry: Partial<DataEntry> = {};
      entry["Email"] = user.email;
      entry["Passes"] = getPassesString(user.passes);
      entry["Benifits Availed"] = (
        <div>
          <p>{user.claims.count} Benifits Claimed</p>
          <p className="text-xs text-primary/60">
            {"("}
            Worth <FormattedCurrency usd={user.claims.amount} />
            {")"}
          </p>
        </div>
      );

      mData.push(entry as Required<typeof entry>);
    });

    setFormattedData(mData);
  }, [users]);

  return (
    <div className="flex flex-col">
      <div className="flex"></div>
      <div className="flex flex-col border border-front/20 rounded-lg">
        <div className="flex p-3 items-center text-front/60">
          <p className="w-[5%] flex items-center">
            <figure className="size-[1em] border border-primary rounded"></figure>
          </p>
          <p className="w-[35%]">{titles[0]}</p>
          <p className="w-[30%]">{titles[1]}</p>
          <p className="w-[30%]">{titles[2]}</p>
        </div>

        {formattedData?.map((entry, key) => (
          <div
            className={twMerge(
              "flex items-center p-3 border-t border-front/10 duration-200",
              isSelected(key) ? "bg-foreground" : "hover:bg-foreground/40"
            )}
            key={key}
          >
            <div className={twMerge("w-[5%] h-full flex items-center")}>
              <button
                className={twMerge(
                  "size-[1em] border border-primary rounded",
                  isSelected(key) && "bg-primary text-back"
                )}
                onClick={() => toggleSelect(key)}
              >
                {isSelected(key) && <Icon icon="check" className="scale-75" />}
              </button>
            </div>
            <div className="w-[35%] truncate">{entry.Email}</div>
            <div className="w-[30%] truncate">{entry.Passes}</div>
            <div className="w-[30%] truncate">{entry["Benifits Availed"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getPassesString(pass: { internal: number; external: number }): string {
  const { internal, external } = pass;
  if (external == 0) return `${internal} internal passes`;
  if (internal == 0) return `${external} passes (all external)`;
  return `${internal} internal + ${external} external`;
}

const dummyUsers = [
  {
    email: "spandan567@gmail.com",
    passes: { internal: 13, external: 4 },
    claims: { count: 13, amount: 1250 },
  },
  {
    email: "riya1jain567@gmail.com",
    passes: { internal: 3, external: 0 },
    claims: { count: 4, amount: 220 },
  },
  {
    email: "yashgo0018@gmail.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
  {
    email: "shreyashjambhulkar@gmail.com",
    passes: { internal: 0, external: 3 },
    claims: { count: 2, amount: 300 },
  },
  {
    email: "harharhar@gmail.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
  {
    email: "peoplearesad@gmail.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
  {
    email: "satoshi@namkamoto.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
  {
    email: "david@king.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
  {
    email: "stand@everywhere.com",
    passes: { internal: 5, external: 3 },
    claims: { count: 8, amount: 650 },
  },
];
