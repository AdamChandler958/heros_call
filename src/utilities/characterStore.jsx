import { create } from 'zustand';

const useCharacterStore = create((set, get) => ({
    name: "",
    alias: '',
    descriptors: '',
    powerLevel: 10,
    attributes: {
        strength: 0, 
        stamina: 0, 
        agility: 0, 
        dexterity: 0,
        fighting: 0, 
        intellect: 0, 
        awareness: 0, 
        presence: 0,
  },

    setField: (field, value) => set({ [field]: value }),

    setPowerLevel: (newPL) => set({ powerLevel: newPL}),

    incrementAttribute: (attr) =>
        set((state => ({
            attributes: {
                ...state.attributes,
                [attr]: state.attributes[attr]+1,
            },
        }))),

    getTotalPoints: () => get().powerLevel * 15,

    getSpentPoints: () => {
    const { attributes } = get();
    const attrPoints = Object.values(attributes).reduce((sum, val) => sum + val * 2, 0);
    return attrPoints;
  },
}));

export default useCharacterStore