import { useEffect, useState } from "react";
import { useCartContext } from "../context/cart.context"

export const useCheckoutProducts = () => { // custom hooks ...
        const {currState, dispatch} = useCartContext(); // custom hooks ...
        const [checkoutItems, setCheckoutItems] = useState([]);
        useEffect(() => {
            setCheckoutItems(() => {
                const uniquedItems = currState?.items?.reduce((uniq, curr) => { // for removing duplicate elements from an Array
                        if(!uniq.find(item => item?.id === curr?.id))
                        {
                            uniq.push({...curr,item_qty: currState?.items?.filter(product => product?.id === curr?.id)?.length});
                            return uniq;
                        }
                        return uniq;
                },[]);
                
                return uniquedItems;
            }); // for unique items 
        },[currState]);
        return {
            checkoutItems,
            dispatch
        }
}