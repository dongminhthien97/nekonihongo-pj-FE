import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

import { normalizeApiError, type ApiError } from "./errors";
import { env } from "../utils/env";
import { logError } from "../utils/logger";
import { clearAuthStorage, tokenStorage } from "../auth/storage";

const baseURL = env.apiUrl;

const attachToken = (config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const handleUnauthorized = () => {
  clearAuthStorage();
  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
};

const api: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

api.interceptors.request.use(attachToken);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const normalized = normalizeApiError(error);
    (error as AxiosError & { normalized?: ApiError }).normalized = normalized;

    if (error.response?.status === 401 || error.response?.status === 403) {
      handleUnauthorized();
    } else if (normalized.isNetworkError) {
      logError("Network error:", normalized.message);
    }

    return Promise.reject(error);
  }
);

export default api;
