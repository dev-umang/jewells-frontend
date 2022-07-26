import axios from "axios";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    
  },
  withCredentials: true,
});

export default api;
