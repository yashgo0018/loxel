import CommonFormInput from "../../../../common/Forms/CommonFormInput";
import Icon from "../../../../common/Icon";
import ViewDeatils from "../../components/ViewDetails";
import ApiCard from "./components/ApiCard";

export default function Developer() {
  return (
    <article className="py-6 flex flex-col gap-y-6">
      <ViewDeatils data={data} className="flex justify-between" />
      <p className="text-sm">
        View API keys to access lab lab lab and private content items{" "}
        <span className="text-primary">
          ( With Limitation and restriction )
        </span>
      </p>
      <div className="mt-8">
        <ApiCard />
      </div>
    </article>
  );
}

const data = {
  label: (
    <>
      5 / 100 API keys
      <Icon icon="help" className="text-[1.3rem]" />
    </>
  ),
  buttonLabel: (
    <>
      Add API keys
      <span>
        <Icon icon="add" className="text-[1rem]" />
      </span>
    </>
  ),
  searchBarQuery: "Search for your API key..."
};
