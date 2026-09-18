import { useCharacterStore, calculateTotals } from "@/utilities/characterStore";
import "@/style/DefenseArray.css";

const DEFENSE_CONFIG = [
  { key: "dodge", label: "Dodge", baseAttr: "agility" },
  { key: "parry", label: "Parry", baseAttr: "fighting" },
  { key: "fortitude", label: "Fortitude", baseAttr: "stamina" },
  { key: "will", label: "Will", baseAttr: "awareness" },
  { key: "toughness", label: "Toughness", baseAttr: "stamina" },
];

export function DefenseArray() {
  const powerLevel = useCharacterStore((state) => state.powerLevel);
  const attributes = useCharacterStore((state) => state.attributes);
  const boughtDefenses = useCharacterStore((state) => state.boughtDefenses);
  const setDefenseRank = useCharacterStore((state) => state.setDefenseRank);

  const totals = calculateTotals(attributes, boughtDefenses);
  const maxCombined = powerLevel * 2;
  const warnings = [];

  if (totals.dodge + totals.toughness > maxCombined) {
    warnings.push(
      `Dodge (${totals.dodge}) + Toughness (${totals.toughness}) exceeds PL ${powerLevel} cap of ${maxCombined}.`,
    );
  }
  if (totals.parry + totals.toughness > maxCombined) {
    warnings.push(
      `Parry (${totals.parry}) + Toughness (${totals.toughness}) exceeds PL ${powerLevel} cap of ${maxCombined}.`,
    );
  }
  if (totals.fortitude + totals.will > maxCombined) {
    warnings.push(
      `Fortitude (${totals.fortitude}) + Will (${totals.will}) exceeds PL ${powerLevel} cap of ${maxCombined}.`,
    );
  }

  return (
    <section className="defense-section">
      <h2>Defenses</h2>

      {warnings.length > 0 && (
        <div className="warning-banner">
          ⚠️ <strong>PL Limit Violations:</strong>
          <ul>
            {warnings.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="defense-grid">
        {DEFENSE_CONFIG.map(({ key, label, baseAttr }) => {
          const baseScore = attributes[baseAttr];
          const boughtRank = boughtDefenses[key];
          const totalScore = totals[key];

          return (
            <div key={key} className="defense-card">
              <div className="defense-header">
                <h3>{label}</h3>
                <span className="total-score">{totalScore}</span>
              </div>
              <div className="breakdown">
                <span>
                  Base ({baseAttr.slice(0, 3).toUpperCase()}): {baseScore}
                </span>
                <span>Bonus: +{boughtRank}</span>
              </div>
              <div className="controls">
                <button
                  type="button"
                  onClick={() => setDefenseRank(key, boughtRank - 1)}
                >
                  -
                </button>
                <span>+{boughtRank} PP</span>
                <button
                  type="button"
                  onClick={() => setDefenseRank(key, boughtRank + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
