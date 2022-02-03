import axios from "axios";

//API URL backend
const instance = axios.create({
    baseURL: "https://gviernes-grupo3-backend-fisi.herokuapp.com"
});

export default instance;