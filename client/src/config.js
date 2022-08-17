import axiosClient from "axios";

export const API_URL = "https://localhost:7072";

export const axios = axiosClient.create({
  baseURL: API_URL,
});
