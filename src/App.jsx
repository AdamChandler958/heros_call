import "./App.css";
import { useState } from "react";
import AppLayout from "./components/appLayout";
import { AttributeTab } from "./components/tabs/attribute/attributeTab";
import { SkillsTab } from "./components/tabs/skill/skillsTab";
import { AdvantagesTab } from "./components/tabs/advantage/advantagesTab";
import "@/style/TabNav.css";

// Placeholders
function PowersTab() {
  return <div>Powers Content</div>;
}

function App() {
  const [activeTab, setActiveTab] = useState("attributes");

  return (
    <AppLayout>
      <nav className="tab-navigation">
        <button
          className={activeTab === "attributes" ? "active" : ""}
          onClick={() => setActiveTab("attributes")}
        >
          Attributes
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "advantages" ? "active" : ""}
          onClick={() => setActiveTab("advantages")}
        >
          Advantages
        </button>
        <button
          className={activeTab === "powers" ? "active" : ""}
          onClick={() => setActiveTab("powers")}
        >
          Powers
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === "attributes" && <AttributeTab />}
        {activeTab === "skills" && <SkillsTab />}
        {activeTab == "advantages" && <AdvantagesTab />}
        {activeTab === "powers" && <PowersTab />}
      </div>
    </AppLayout>
  );
}

export default App;
