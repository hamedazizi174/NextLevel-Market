import { UserSigninType } from "@/types/types";
import { api } from "../config.api";

export async function postUserApi(user: UserSigninType) {
  const res = await api.post("/auth/login", user);
  return res.data;
}

export async function logoutApi() {
  const res = await api.get("/auth/logout");
  return res.data;
}
