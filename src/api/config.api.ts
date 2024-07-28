import { TOKENS } from "@/constant/general";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use((config) => {
  if (config.url !== "/auth/token") {
    const accessToken = localStorage.getItem(TOKENS.ACCESS);
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },

  // 401
  (error) => {
    const config = error.config;
    if (error.response.status === 401 && config.url !== "/auth/login") {
      const refreshToken = localStorage.getItem(TOKENS.REFRESH);
      api.post("/auth/token", { refreshToken }).then((res) => {
        const accessToken = res?.data?.token?.accessToken;
        localStorage.setItem(TOKENS.ACCESS, accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
        return api(config);
      });
    } else if (config.url === "/auth/token") {
      localStorage.removeItem(TOKENS.ACCESS);
      localStorage.removeItem(TOKENS.REFRESH);
      location.href = "/signin";
    } else {
      return error.response;
    }
  }
);
