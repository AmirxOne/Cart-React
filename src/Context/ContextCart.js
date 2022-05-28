import React, {useReducer, createContext} from 'react';


const initialState = {
    selectItem: [],
    itemCounter: 0,
    total: 0,
    checkOut: false,
}

const Calculations = (item) => {
    const itemCounter = item.reduce((total, product) => total + product.quantity ,0)
    const total = item.reduce((total, product) => total + product.price * product.quantity ,0)
    return {itemCounter, total}
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectItem.find(item => item.id === action.payload.id)) {
                state.selectItem.push({...action.payload, quantity: 1})
            }
            return {
                ...state, selectItem: [...state.selectItem],...Calculations(state.selectItem)
            }
        case "REMOVE_ITEM":
            const newSelectItem = state.selectItem.filter(item => item.id !== action.payload.id)
            return {
                ...state, selectItem: [...newSelectItem],...Calculations(newSelectItem)
            }
        case "POSITIVE":
            const Positive = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[Positive].quantity++;
            return {
                ...state,...Calculations(state.selectItem)
            }
        case "NEGATIVE":
            const Negative = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[Negative].quantity--;
            return {
                ...state,...Calculations(state.selectItem)
            }
        case "CHECK_OUT":
            return {
                selectItem: [],
                itemCounter: 0,
                total: 0,
                checkOut: true,
            }
        case "CLEAR":
            return {
                selectItem: [],
                itemCounter: 0,
                total: 0,
                checkOut: false,
            }
        default:
            return state
    }
}

// Create Context
export const CartContext = createContext();

const ContextCart = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default ContextCart;
