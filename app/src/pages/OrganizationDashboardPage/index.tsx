import React, { useState } from "react";
import Header from "./components/Header";
import PageSeparator from "../../common/PageSeparator";
import Tabs from "../../common/Tabs";
import AnalyticsView from "./views/AnalyticsView";
import PassesView from "./views/PassesView";
import DeveloperView from "./views/DeveloperView";
import BenifitsView from "./views/BenefitsView";

export default function OrganizationDashboardPage() {
  const [viewElement, setViewElement] = useState<React.ReactNode>();

  const tabs = [
    { title: "Passes", element: <PassesView /> },
    { title: "Benefits", element: <BenifitsView /> },
    { title: "Analytics", element: <AnalyticsView /> },
    { title: "Developer", element: <DeveloperView /> },
    { title: "Settings" },
  ];

  return (
    <>
      <Header />

      <PageSeparator className="my-10" />

      <section className="p-page">
        <Tabs
          tabs={tabs}
          onChange={(idx) => setViewElement(tabs[idx].element)}
        />

        {viewElement || <div className="h-[50vh]" />}
      </section>
    </>
  );
}
