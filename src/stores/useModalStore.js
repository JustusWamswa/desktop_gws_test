import { create } from 'zustand'

export const useModalStore = create((set) => ({
    fsLoader: false,
    setFsLoader: (newValue) => set({fsLoader: newValue}),
}))