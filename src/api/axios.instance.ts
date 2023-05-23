import axios from "axios";

const ARDUINO_URL = process.env.ARDUINO_URL || "";

export const api = axios.create({
  baseURL: ARDUINO_URL,
});
