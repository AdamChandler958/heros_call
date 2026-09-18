import { useCharacterStore } from '@/utilities/characterStore';

function PowerLevelInput() {
    const powerLevel = useCharacterStore((state) => state.powerLevel);
    const setField = useCharacterStore((state) => state.setField);

    return (
    <div className="field-group">
      <label htmlFor="pl-input">Power Level (PL)</label>
      <input
        id="pl-input"
        type="number"
        min="1"
        max="20"
        value={powerLevel}
        onChange={(e) => setField('powerLevel', Number(e.target.value))}
      />
    </div>
  );
};

export default PowerLevelInput