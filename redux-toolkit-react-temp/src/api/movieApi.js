import axios from "axios"

export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export default axios.create({
    baseURL: BASE_URL,
})