export const createReducer = () => {
    return (state, action) => {
        let newState = { ...state };
        switch (action.type) {
            case 'ADD_TO_CART':
                if (newState.items.length === 0) {
                    newState = {
                        ...newState,
                        qty: 1,
                        items: [...newState.items, { id: action.payload.id, name: action.payload.name, price: action?.payload?.price, img_url: action?.payload?.img_url }],
                    };
                    localStorage.setItem('cart', JSON.stringify(newState)); // ... set newstate to localStorage ...
                } else {
                    newState = {
                        ...newState,
                        qty: newState.qty + 1,
                        items: [...newState?.items, { id: action?.payload?.id, name: action?.payload?.name, price: action?.payload?.price, img_url: action?.payload?.img_url }],
                    };
                    localStorage.setItem('cart', JSON.stringify(newState)); // ... set newstate to localStorage ...
                }
                return newState;
            case 'REMOVE_CART':
                if (newState.items.find(item => item?.id === action.payload?.id)) {
                    newState = {
                        ...newState,
                        qty: newState.items.filter(item => item?.id !== action?.payload?.id)?.length,
                        items: newState.items.filter(item => item?.id !== action?.payload?.id)

                    };
                    localStorage.setItem('cart', JSON.stringify(newState)); // Update localStorage
                    return newState
                }
                return newState;
            case 'INCREMENT_CART':
                newState = state;
                if (newState.items.find(item => item?.id === action?.payload?.id)) {
                    newState = {
                        ...newState,
                        qty: newState.qty + 1,
                        items: [...newState?.items, { id: action?.payload?.id, name: action?.payload?.name, price: action?.payload?.price, img_url: action?.payload?.img_url }]
                    }
                }
                localStorage.setItem('cart', JSON.stringify(newState)); // Update localStorage
                return newState;
            case 'DECREMENT_CART':
                newState = { ...state }; // Create a new copy of state
                const itemIndexToDecrement = newState.items.findIndex(item => item.id === action.payload.id);
                if (itemIndexToDecrement !== -1) {
                    newState = {
                        qty: newState.qty - 1,
                        items: [...newState?.items?.slice(0, itemIndexToDecrement), ...newState?.items?.slice(itemIndexToDecrement + 1)]
                    }
                    localStorage.setItem('cart', JSON.stringify(newState)); // Update localStorage
                }
                return newState;
            default: throw new Error('No Option Matched');
        }
    }
}