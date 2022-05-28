import React, {useReducer, createContext} from 'react';

// Create Context
export const CartContext = createContext();

const initialState = {
    selectItem: [],
    itemCounter: 0,
    total: 0,
    checkOut: false,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectItem.find(item => item.id === action.payload.id)) {
                state.selectItem.push({...action.payload, quantity: 1})
            }
            return {
                ...state, selectItem: [...action.payload]
            }
        case "REMOVE_ITEM":
            const newSelectItem = state.selectItem.filter(item => item.id !== action.payload.id)
            return {
                ...state, selectItem: [...newSelectItem]
            }
        case "POSITIVE":
            const Positive = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[Positive].quantity++;
            return {
                ...state
            }
        case "NEGATIVE":
            const Negative = state.selectItem.findIndex(item => item.id === action.payload.id)
            state.selectItem[Negative].quantity--;
            return {
                ...state
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

const ContextCart = (props) => {

    const {state, dispatch} = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {props.children}
        </CartContext.Provider>
    );
};

export default ContextCart;
