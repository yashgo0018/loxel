import React, { useState } from "react";
import Header from "./components/Header";
import PageSeparator from "../../common/PageSeparator";
import Tabs from "../../common/Tabs";
import AnalyticsView from "./views/AnalyticsView";
import Passes from "./views/Passes";

export default function OrganizationDashboardPage() {
  const [viewElement, setViewElement] = useState<React.ReactNode>();

  const tabs = [
    { title: "Passes", element: <Passes /> },
    { title: "Benifits" },
    { title: "Analytics", element: <AnalyticsView /> },
    { title: "Developer" },
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
