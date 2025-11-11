import axios from "axios";

const BASE_URL = "http://3.111.42.160:4000/api/admin"

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
      "Content-Type": "application/json",
  },
  allowAbsoluteURL: true,
  timeout: 10000,
})

export default apiClient;