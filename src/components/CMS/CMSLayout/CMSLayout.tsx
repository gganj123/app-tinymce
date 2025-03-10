import React from "react";
import { useCMS } from "@/context/CMSContext";
import "./CMSLayout.css";

interface CMSLayoutProps {
  tabs: string[];
  children: React.ReactNode;
}

const CMSLayout: React.FC<CMSLayoutProps> = ({ tabs, children }) => {
  const { activeTab, setActiveTab } = useCMS();

  return (
    <div className="cms-layout">
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default CMSLayout;
