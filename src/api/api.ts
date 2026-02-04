import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

// General API instance (authenticated calls)
const api = axios.create({
  baseURL,
  withCredentials: true,
});

// Auth API instance (login/register, no cookies)
const authApi = axios.create({
  baseURL,
  withCredentials: false,
});

const attachToken = (config: any) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
};

api.interceptors.request.use(attachToken);
authApi.interceptors.request.use(attachToken);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export async function loginRequest(email: string, password: string) {
  try {
    const res = await authApi.post(
      "/auth/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Login failed"
    );
  }
}

export { authApi };
export default api;
