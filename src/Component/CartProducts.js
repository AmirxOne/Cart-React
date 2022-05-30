import React, { useContext } from 'react';
import { ShortText } from "../Functions/ShortText";
// Context
import {CartContext} from "../Context/ContextCart";
// Style
import style from "../Component-style/CartProducts.module.css"

const CartProducts = ({cartData}) => {

    const {dispatch} = useContext(CartContext)

    return (
        <div className={style.boxProduct}>
            <div className={style.boxImage}>
                <img src={cartData.image} alt=""/>
            </div>

            <div className={style.titlePrice}>
                <p className={style.title}>{ShortText(cartData.title)}</p>
                <p className={style.price}>${cartData.price}</p>
            </div>
            <div className={style.boxQuntity}>
                <span>{cartData.quantity}</span>
            </div>
            <div className={style.boxButton}>
                {
                    cartData.quantity > 1 ? <button className={style.neg} onClick={() => dispatch({type:"NEGATIVE" , payload:cartData})}> </button> :
                    <button className={style.rem} onClick={() => dispatch({type:"REMOVE_ITEM" , payload:cartData})}> </button>
                }
                <button className={style.pos} onClick={() => {dispatch({type:"POSITIVE", payload:cartData})}}> </button>
            </div>
        </div>
    );
};

export default CartProducts;