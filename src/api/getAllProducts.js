import axios from "axios";

export const getAllProducts = async baseUrl => {
    try{
        const res = await axios.get(baseUrl);
        return res?.data;
    }catch(error)
    {
        throw new Error(error);
    }
}