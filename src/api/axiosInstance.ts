import axios from "axios";

const baseURL = "http://192.168.1.5:3000/";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
