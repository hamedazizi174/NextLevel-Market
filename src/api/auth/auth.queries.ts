import { useMutation, useQuery } from "@tanstack/react-query";
import { logoutApi, postUserApi } from "./auth.api";
import { UserSigninType } from "@/types/types";
import { useRouter } from "next/router";
import { ROUTES } from "@/constant/routes";
import { ROLES, TOKENS } from "@/constant/general";
import { useUserStore } from "@/store/userStore";

export function usePostUser(user: UserSigninType) {
  const updateUserStore = useUserStore((state) => state.update);
  const router = useRouter();
  return useMutation({
    mutationFn: () => postUserApi(user),
    onSuccess(data) {
      localStorage.setItem(TOKENS.ACCESS, data.token.accessToken);
      localStorage.setItem(TOKENS.REFRESH, data.token.refreshToken);
      updateUserStore(data.data.user);
      if (data.data.user.role === ROLES.ADMIN) {
        router.push(ROUTES.ADMIN);
      } else {
        router.push(ROUTES.HOME);
      }
    },
  });
}

export function useLogout() {
  const router = useRouter();
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess() {
      localStorage.removeItem(TOKENS.ACCESS);
      localStorage.removeItem(TOKENS.REFRESH);
      useUserStore.persist.clearStorage();
      router.push(ROUTES.HOME);
    },
  });
}
