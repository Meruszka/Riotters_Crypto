import axios from "axios";

const cryptoApi = axios.create({
  baseURL: "/api",
  headers: {
    "X-CMC_PRO_API_KEY": "YOUR_API_KEY",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type",
  },
});

export default cryptoApi;
