import { create } from 'zustand';

export const useCharacterStore = create((set, get) => ({
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
    boughtDefenses: {
        dodge: 0,
        parry: 0,
        fortitude: 0,
        will: 0,
        toughness: 0
    },

    setField: (field, value) => set({ [field]: value }),

    setPowerLevel: (newPL) => set({ powerLevel: newPL}),

    setAttribute: (attrKey, value) =>
    set((state) => ({
      attributes: {
        ...state.attributes,
        [attrKey]: Math.max(-5, value),
      },
    })),

    setDefenseRank: (defenseKey, value) => 
        set((state) => ({
            boughtDefenses: {
                ...state.boughtDefenses,
                [defenseKey]: Math.max(0, value)
            },
        })),

    getTotalPoints: () => get().powerLevel * 15,

    getSpentPoints: () => {
        const { attributes, boughtDefenses} = get();
        const attrPoints = Object.values(attributes).reduce((sum, val) => sum + val * 2, 0);
        const defensePoints = Object.values(boughtDefenses).reduce((sum, rank) => sum + rank, 0);
        return attrPoints + defensePoints;
    },
}))

export function calculateTotals(attributes, boughtDefenses) {
        return {
            dodge: attributes.agility + boughtDefenses.dodge,
            parry: attributes.fighting + boughtDefenses.parry,
            toughness: attributes.stamina + boughtDefenses.toughness,
            fortitude: attributes.stamina + boughtDefenses.fortitude,
            will: attributes.awareness + boughtDefenses.will,
        };
}