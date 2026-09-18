import BudgetTracker from "./budgetTracker";
import PowerLevelInput from "./powerLevelInput";
import CharacterMetaData from "./characterMetaData";

function Sidebar() {
  return (
    <aside className="builder-sidebar">
      <h2>Character Overview</h2>
      <BudgetTracker />
      <PowerLevelInput />
      <CharacterMetaData />
    </aside>
  );
}

export default Sidebar;
