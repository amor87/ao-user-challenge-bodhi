import axios, { AxiosInstance as AxiosInstanceType } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
const AUTH_USER = process.env.NEXT_PUBLIC_API_AUTH_USERNAME || "";
const AUTH_PASS = process.env.NEXT_PUBLIC_API_AUTH_PASSWORD || "";

export const AxiosInstance: AxiosInstanceType = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: AUTH_USER,
    password: AUTH_PASS,
  },
});
