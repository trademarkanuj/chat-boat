// frontend/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "https://server-mu-ecru-56.vercel.app/api/",
  headers: { "Content-Type": "application/json" },
});

export const fetchMessages = () => api.get("/chat/messages/").then(r => r.data);

export const sendMessage = (content) =>
  api.post("/chat/messages/", { content }).then(r => r.data);

export default api;
