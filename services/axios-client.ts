import axios from 'axios'

const DEFAULT_API_BASE_URL = 'https://backend-portfolio-r7zx.onrender.com/api'

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})
