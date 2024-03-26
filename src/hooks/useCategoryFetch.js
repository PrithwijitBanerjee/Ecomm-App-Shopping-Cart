import { useEffect, useState } from "react"
import { getAllCategories } from "../api/getAllCategories";

export const useCategoryFetch = () => { //custom hooks ...
    const [categoryItems, setCategoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const getCategories = async () => {
        try {
            setLoading(true);
            const data = await getAllCategories(process.env.REACT_APP_CATEGORY_URL);
            setCategoryItems(data);
            setLoading(false);
            setIsError(false);
        } catch (error) {
            setIsError(error?.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return {
        categoryItems,
        loading,
        isError
    }
}