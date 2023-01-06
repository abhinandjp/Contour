import axios from "axios";

export const axiosUserInstance = axios.create({
  baseURL: "http://localhost:3000/user",
});

export const axiosContractorInstance = axios.create({
  baseURL: "http://localhost:3000/contractor",
});

export const axiosAdminInstance = axios.create({
  baseURL: "http://localhost:3000/admin",
});
