import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key: 'cac3b96286754f82bf1cd8635727ee23'
    }
})