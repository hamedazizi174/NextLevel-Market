import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use((config) => {
  if (config.url !== "/auth/token") {
    const accessToken = localStorage.getItem("accessToken");
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
      const refreshToken = localStorage.getItem("refreshToken");
      api.post("/auth/token", { refreshToken }).then((res) => {
        const accessToken = res?.data?.token?.accessToken;
        localStorage.setItem("accessToken", accessToken);
        config.headers.Authorization = `Bearer ${accessToken}`;
        return api(config);
      });
    } else if (config.url === "/auth/token") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      location.href = "/signin";
    } else {
      return error.response;
    }
  }
);
