import { UserType } from "@/types/types";
import { create } from "zustand";

type UserStore = {
  user: UserType | null;
  update: (user: UserType) => void;
  reset: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  update: (user) => {
    set(() => ({ user: user }));
  },
  reset: () => {
    set(() => ({ user: null }));
  },
}));
