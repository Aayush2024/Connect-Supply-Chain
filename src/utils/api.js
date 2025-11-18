import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // change if your Spring Boot base path differs
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
