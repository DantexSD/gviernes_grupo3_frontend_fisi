import axios from "axios";

//API URL backend
const instance = axios.create({
    baseURL: "http://10.0.2.2:8000"
    // baseURL: "https://gviernes-grupo3-backend-fisi.herokuapp.com"
});

export default instance;