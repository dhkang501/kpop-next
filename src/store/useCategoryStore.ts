import {create} from 'zustand';

type CategoryStore = {
  selectCategory: number;
  setCategory: (index: number) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectCategory: 0,
  setCategory: (index) => set({selectCategory: index}),
}));