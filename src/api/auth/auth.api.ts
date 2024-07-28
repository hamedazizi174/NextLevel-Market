import { UserType } from "@/types/types";
import { api } from "../config.api";

export async function postUserApi(user: UserType) {
  const res = await api.post("/auth/login", user);
  return res.data;
}
