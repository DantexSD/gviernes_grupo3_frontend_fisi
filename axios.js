import axios from "axios";

//API URL backend
const instance = axios.create({
    baseURL: "http://10.0.2.2:8000"
    // baseURL: "https://app-conocetudocentefisi.herokuapp.com/"
});

export default instance;