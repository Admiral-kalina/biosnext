import axios from "axios";

const strapiAxios = axios.create({baseURL:'http://localhost:1337'})

export default strapiAxios;
