import { create } from "zustand"

const useItemStore = create((set) => ({
    searchQuery: "",
    checkedValues: {},

    setSearchQuery: (query) => set({ searchQuery: query }),
    setCheckedValues: (name, checked) =>
        set((state) => ({
            checkedValues: {
                ...state.checkedValues,
                [name]: checked, 
            },
        })),
}))

export default useItemStore
