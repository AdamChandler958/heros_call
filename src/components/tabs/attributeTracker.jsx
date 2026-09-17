import useCharacterStore from '@/utilities/characterStore';

function AttributeTracker({ name, attrKey }) {
  const score = useCharacterStore((state) => state.attributes[attrKey]);
  const setAttribute = useCharacterStore((state) => state.setAttribute);

  const cost = score * 2; // M&M 3e attributes cost 2 PP per rank

  return (
    <div className="attribute-card">
      <h3>{name}</h3>
      <div className="controls">
        <button onClick={() => setAttribute(attrKey, score - 1)}>-</button>
        <span className="score">{score}</span>
        <button onClick={() => setAttribute(attrKey, score + 1)}>+</button>
      </div>
      <span className="cost">{cost} PP</span>
    </div>
  );
};

export default AttributeTracker