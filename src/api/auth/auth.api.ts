import { UserSigninType } from "@/types/types";
import { api } from "../config.api";

export async function postUserApi(user: UserSigninType) {
  const res = await api.post("/auth/login", user);
  return res.data;
}
