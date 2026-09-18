import { useState } from "react";
import {
  useCharacterStore,
  getAdvantagePointsSpent,
} from "@/utilities/characterStore";
import { AVAILABLE_ADVANTAGES } from "@/utilities/advantagesData";
import "@/style/AdvantagesTab.css";

export function AdvantagesTab() {
  const advantages = useCharacterStore((state) => state.advantages);
  const addAdvantage = useCharacterStore((state) => state.addAdvantage);
  const updateAdvantageRank = useCharacterStore(
    (state) => state.updateAdvantageRank,
  );
  const updateAdvantageDetails = useCharacterStore(
    (state) => state.updateAdvantageDetails,
  );
  const removeAdvantage = useCharacterStore((state) => state.removeAdvantage);

  const [selectedKey, setSelectedKey] = useState(AVAILABLE_ADVANTAGES[0].key);

  const handleAdd = () => {
    const advData = AVAILABLE_ADVANTAGES.find((a) => a.key === selectedKey);
    if (advData) addAdvantage(advData);
  };

  const totalSpent = getAdvantagePointsSpent(advantages);

  return (
    <section className="advantages-section">
      <div className="advantages-header">
        <h2>Advantages</h2>
        <span className="pp-summary">
          Spent: <strong>{totalSpent} PP</strong>
        </span>
      </div>

      <div className="advantage-picker">
        <select
          value={selectedKey}
          onChange={(e) => setSelectedKey(e.target.value)}
        >
          {AVAILABLE_ADVANTAGES.map((adv) => (
            <option key={adv.key} value={adv.key}>
              {adv.name} {adv.maxRank ? `(Max Rank ${adv.maxRank})` : ""}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAdd} className="add-adv-btn">
          + Add Advantage
        </button>
      </div>

      <div className="advantages-list">
        {advantages.length === 0 ? (
          <p className="empty-state">No advantages added yet.</p>
        ) : (
          advantages.map((adv) => (
            <div key={adv.id} className="advantage-card">
              <div className="adv-main-info">
                <span className="adv-title">{adv.name}</span>
                {adv.details !== null && (
                  <input
                    type="text"
                    className="adv-details-input"
                    placeholder="Specification (e.g., Swords, Wealth, Dragons)..."
                    value={adv.details}
                    onChange={(e) =>
                      updateAdvantageDetails(adv.id, e.target.value)
                    }
                  />
                )}
              </div>

              <div className="adv-controls">
                <button
                  type="button"
                  onClick={() => updateAdvantageRank(adv.id, -1)}
                >
                  -
                </button>
                <span className="adv-rank">Rank {adv.rank}</span>
                <button
                  type="button"
                  onClick={() => updateAdvantageRank(adv.id, 1)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeAdvantage(adv.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
