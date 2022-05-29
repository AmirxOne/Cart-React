import React, { useContext } from 'react';
import { ShortText } from "../Functions/ShortText";

// Context
import {CartContext} from "../Context/ContextCart";

const CartProducts = ({cartData}) => {

    const {dispatch} = useContext(CartContext)

    return (
        <div>
            <img style={{width:"200px"}} src={cartData.image} alt=""/>
            <div>
                <p>{ShortText(cartData.title)}</p>
                <p>{cartData.price}</p>
            </div>
            <div>
                <span>{cartData.quantity}</span>
            </div>
            <div>
                {
                    cartData.quantity > 1 ? <button onClick={() => dispatch({type:"NEGATIVE" , payload:cartData})}> - </button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM" , payload:cartData})}> remove </button>
                }
                <button onClick={() => {dispatch({type:"POSITIVE", payload:cartData})}}> + </button>
            </div>
        </div>
    );
};

export default CartProducts;