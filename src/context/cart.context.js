import { createContext, useContext } from "react";

import { useCartReducer } from "../hooks/useCartReducer";

const CartContext = createContext(); // create a context in react ...


export const CartProvider = ({ children }) => {
    const [currState, dispatch] = useCartReducer(); // custom hooks ...
    return (<>
        <CartContext.Provider value={{ currState, dispatch }}>
            {children}
        </CartContext.Provider>
    </>)
};


// React custom hooks for using that context API ...
export const useCartContext = () => useContext(CartContext);