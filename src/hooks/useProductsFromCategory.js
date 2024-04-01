import { useEffect, useState } from "react"
import { getAllProducts } from "../api/getAllProducts";

export const useProductsFromCategory = (id, keywords) => { //custom hooks ...
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getProductsBasedCategory = async id => {
        try {
            setLoading(true);
            const data = await getAllProducts(process.env.REACT_APP_PRODUCTS_URL);
            let filteredData = keywords.length === 1 ?
                data.filter(item => item.categoryId === id).filter(item => item[keywords[0]] === true) :
                data.filter(item => item.categoryId === id);
            setProducts(filteredData);
            setLoading(false);
        } catch (error) {
            setError(error?.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductsBasedCategory(id);
    }, [id, keywords]);
    return {
        products,
        loading,
        error
    }
}