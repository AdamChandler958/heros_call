import { useCharacterStore } from '@/utilities/characterStore';

function BudgetTracker() {
    // const powerLevel = useCharacterStore((state) => state.powerLevel);
    const totalBudget = useCharacterStore((state) => state.getTotalPoints());
    const spentPoints = useCharacterStore((state) => state.getSpentPoints());

    const remainingPoints = totalBudget - spentPoints;
    const isOverBudget = remainingPoints < 0;

    return (
    <div className="budget-card">
      <h3>Point Summary</h3>
      <div className="budget-row">
        <span>Total Budget:</span>
        <strong>{totalBudget} PP</strong>
      </div>
      <div className="budget-row">
        <span>Spent:</span>
        <span>{spentPoints} PP</span>
      </div>
      <div className={`budget-row ${isOverBudget ? 'over-budget' : ''}`}>
        <span>Remaining:</span>
        <strong>{remainingPoints} PP</strong>
      </div>
    </div>
  );

};

export default BudgetTracker