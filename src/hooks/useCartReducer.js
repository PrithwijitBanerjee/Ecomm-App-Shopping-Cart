import { useReducer } from "react";
import { createReducer } from "../reducer/cartReducer";


export const useCartReducer = () => { // custom hooks ...
    const [currState, dispatch] = useReducer(createReducer(), {
        qty: 0,
        items: [],
    }, state => {
        const persistedState = JSON.parse(localStorage.getItem('cart'));
        return persistedState ? persistedState : state;
    });

    return [currState, dispatch];
}