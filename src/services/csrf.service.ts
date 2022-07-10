import api from "src/common/config/api.config";

export const getCSRF = () => api.get("/");
