import Inventory from "@/components/admin/Inventory/Inventory";
import { InventoryProductType } from "@/types/types";
import { create } from "zustand";

type InventoryStore = {
  inventory: InventoryProductType[];
  update: (product: InventoryProductType) => void;
  reset: () => void;
};

export const useInventoryStore = create<InventoryStore>((set) => ({
  inventory: [],
  update: (product) => {
    set((state) => ({ inventory: [...state.inventory, product] }));
  },
  reset: () => {
    set(() => ({ inventory: [] }));
  },
}));
