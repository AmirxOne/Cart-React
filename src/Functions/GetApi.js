import axios from "axios";
//BASE API
export const BASE_API = "https://fakestoreapi.com"

const getApi = async () => {
    const result = await axios.get(`${BASE_API}/products`);
    return result.data
}

export {getApi}