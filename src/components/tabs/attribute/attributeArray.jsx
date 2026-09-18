import AttributeTracker from "./attributeTracker";
import "@/style/AttributeArray.css";

const ATTRIBUTES = [
  { key: "strength", label: "Strength" },
  { key: "stamina", label: "Stamina" },
  { key: "agility", label: "Agility" },
  { key: "dexterity", label: "Dexterity" },
  { key: "fighting", label: "Fighting" },
  { key: "intellect", label: "Intellect" },
  { key: "awareness", label: "Awareness" },
  { key: "presence", label: "Presence" },
];

export function AttributeArray() {
  return (
    <section className="attribute-section">
      <h2>Attributes</h2>
      <div className="attribute-grid">
        {ATTRIBUTES.map((attr) => (
          <AttributeTracker
            key={attr.key}
            attrKey={attr.key}
            name={attr.label}
          />
        ))}
      </div>
    </section>
  );
}
