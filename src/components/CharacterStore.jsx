import { create } from 'zustand';

const useCharacterStore = create((set, get) => ({
    name: "Hero",
    powerLevel: 10,
    attributes: {
        strength: 2,
        agility: 3,
    },

    setPowerLevel: (newPL) => set({ powerLevel: newPL}),

    incrementAttribute: (attr) =>
        set((state => ({
            attributes: {
                ...state.attributes,
                [attr]: state.attributes[attr]+1,
            },
        }))),

    getTotalPoints: () => get().powerLevel * 15
}));