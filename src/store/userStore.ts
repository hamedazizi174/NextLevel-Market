import { USER } from "@/constant/general";
import { UserType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStoreType = {
  user: UserType | null;
  update: (user: UserType) => void;
  reset: () => void;
};

export const useUserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      user: null,
      update: (user: UserType | null) => {
        set(() => ({ user: user }));
      },
      reset: () => {
        set(() => ({ user: null }));
      },
    }),
    { name: USER }
  )
);
