import { InventoryProductType } from "@/types/types";
import { create } from "zustand";

type InventoryStore = {
  inventory: InventoryProductType[];
  update: (product: InventoryProductType) => void;
  reset: () => void;
};

export const useInventoryStore = create<InventoryStore>((set, get) => ({
  inventory: [],
  update: (product) => {
    const exist = get().inventory.findIndex((item) => item.id === product.id);
    if (exist !== -1) {
      get().inventory[exist] = product;
    } else {
      set((state) => ({ inventory: [...state.inventory, product] }));
    }
  },
  reset: () => {
    set(() => ({ inventory: [] }));
  },
}));
