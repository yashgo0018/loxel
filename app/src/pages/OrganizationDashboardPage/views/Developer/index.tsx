import CommonFormInput from "../../../../common/Forms/CommonFormInput";
import Icon from "../../../../common/Icon";
import ViewDeatils from "../../components/ViewDetails";
import ApiCard from "./components/ApiCard";

export default function Developer() {
  return (
    <article className="py-6 flex flex-col gap-y-6">
      <ViewDeatils />
      <p className="text-sm">
        View API keys to access lab lab lab and private content items{" "}
        <span className="text-primary">( With Limitation and restriction )</span>
      </p>
      <div className="mt-8">
        <ApiCard />
      </div>
    </article>
  );
}
