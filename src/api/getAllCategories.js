import axios from "axios"

// Custom API ...
export const getAllCategories = async baseUrl => {
    try{
        const res = await axios.get(baseUrl);
        return res?.data;
    }catch(error)
    {
        throw new Error(error);
    }
}