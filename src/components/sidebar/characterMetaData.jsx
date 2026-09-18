import { useCharacterStore } from "@/utilities/characterStore";

function CharacterMetaData() {
  const name = useCharacterStore((state) => state.name);
  const alias = useCharacterStore((state) => state.alias);
  const descriptors = useCharacterStore((state) => state.descriptors);
  const setField = useCharacterStore((state) => state.setField);

  return (
    <div className="metadata-fields">
      <div className="field-group">
        <label>Real Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setField("name", e.target.value)}
        />
      </div>
      <div className="field-group">
        <label>Hero Alias</label>
        <input
          type="text"
          value={alias}
          onChange={(e) => setField("alias", e.target.value)}
        />
      </div>
      <div className="field-group">
        <label>Descriptors / Origin</label>
        <textarea
          value={descriptors}
          placeholder="e.g. Mutant, Technological, Cosmic"
          onChange={(e) => setField("descriptors", e.target.value)}
        />
      </div>
    </div>
  );
}

export default CharacterMetaData;
