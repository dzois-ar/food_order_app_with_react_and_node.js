
import { createContext, useReducer } from "react";  

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
});

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const existingCartIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
       
        const updateItems = [...state.items];

        if (existingCartIndex > -1) {
            const existingItem = state.items[existingCartIndex];
            const updateItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updateItems[existingCartIndex] = updateItem;
        } else {
            updateItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updateItems };
    }

    if (action.type === "REMOVE_ITEM") {  
        const existingCartIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartIndex];
        const updateItems = [...state.items];

        if (existingCartItem.quantity === 1) {  
            updateItems.splice(existingCartIndex, 1);  
        } else {
            const updateItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updateItems[existingCartIndex] = updateItem;
        }

        return { ...state, items: updateItems };
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] };
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item });
    }

    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id });  
    }

    function clearCart() {
        dispatchCartAction({type: 'CLEAR_CART'})
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
