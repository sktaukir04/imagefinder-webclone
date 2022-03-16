import axios from "axios";

const API_KEY = "19700195-077cf3f972def9b30f502099d";
const URL = "https://pixabay.com/api/"

export const getImages = (text,count) => {
    try {
        const data = axios.get(`${URL}/?key=${API_KEY}&q=${text}&per_page=${count}&safesearch=true`)
        return data;
    } catch (err) {
        console.log(err)
    }
}