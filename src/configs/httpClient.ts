import type { AxiosInstance } from "axios";
import axios from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
