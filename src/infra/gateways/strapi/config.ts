import axios from "axios";
import 'dotenv/config';


export const strapiClient = axios.create({
  baseURL: process.env.STRAPI_URL,
});