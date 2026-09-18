import {
  useCharacterStore,
  getSkillPointsSpent,
} from "@/utilities/characterStore";
import "@/style/SkillsTab.css";

const SKILL_LIST = [
  { key: "acrobatics", name: "Acrobatics", attr: "agility" },
  { key: "athletics", name: "Athletics", attr: "strength" },
  { key: "closeCombat", name: "Close Combat", attr: "fighting" },
  { key: "deception", name: "Deception", attr: "presence" },
  { key: "expertise", name: "Expertise", attr: "intellect" },
  { key: "insight", name: "Insight", attr: "awareness" },
  { key: "intimidation", name: "Intimidation", attr: "presence" },
  { key: "investigation", name: "Investigation", attr: "intellect" },
  { key: "perception", name: "Perception", attr: "awareness" },
  { key: "persuasion", name: "Persuasion", attr: "presence" },
  { key: "rangedCombat", name: "Ranged Combat", attr: "dexterity" },
  { key: "sleightOfHand", name: "Sleight of Hand", attr: "dexterity" },
  { key: "stealth", name: "Stealth", attr: "agility" },
  { key: "technology", name: "Technology", attr: "intellect" },
  { key: "treatment", name: "Treatment", attr: "intellect" },
  { key: "vehicles", name: "Vehicles", attr: "dexterity" },
];

export function SkillsTab() {
  const attributes = useCharacterStore((state) => state.attributes);
  const skills = useCharacterStore((state) => state.skills);
  const setSkillRank = useCharacterStore((state) => state.setSkillRank);

  const totalPointsSpent = getSkillPointsSpent(skills);

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <span className="skill-pp-summary">
          Total Spent: <strong>{totalPointsSpent} PP</strong>
        </span>
      </div>

      <div className="skills-grid">
        {SKILL_LIST.map(({ key, name, attr }) => {
          const baseAttrScore = attributes[attr] || 0;
          const boughtRank = skills[key] || 0;
          const totalModifier = baseAttrScore + boughtRank;

          return (
            <div key={key} className="skill-row">
              <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className="skill-attr">
                  ({attr.slice(0, 3).toUpperCase()})
                </span>
              </div>

              <div className="skill-total">+{totalModifier}</div>

              <div className="skill-controls">
                <button
                  type="button"
                  onClick={() => setSkillRank(key, boughtRank - 1)}
                >
                  -
                </button>
                <span className="skill-rank-display">Rank {boughtRank}</span>
                <button
                  type="button"
                  onClick={() => setSkillRank(key, boughtRank + 1)}
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
