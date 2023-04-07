import axios from "axios"
import { API_SERVER_URL } from "./public-config"

export const fetchBooks = async () => {
    const response = await axios.get(`${API_SERVER_URL}/books`)
    return response.data
}