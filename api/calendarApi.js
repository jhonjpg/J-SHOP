import axios from "axios";
import { getEnvVariable } from "../helpers/getEnvVariable";


const { VITE_API_URL } = getEnvVariable()

const eventosApi = axios.create({

    baseURL: VITE_API_URL
});




export default eventosApi;