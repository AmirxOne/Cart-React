import React, {useContext} from 'react';
import CartProducts from "./CartProducts";
// Context
import {CartContext} from "../Context/ContextCart";
import {Link} from "react-router-dom";
// Style
import style from "../Component-style/Cart.module.css"

const Cart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={style.BoxCart}>
            <div className={style.CartProducts}>
                {state.selectItem.map(product => <CartProducts key={product.id} cartData={product}/>)}
            </div>
            <div className={style.boxAllTotall}>
                <div className={style.boxTotal}>

                    {
                        state.itemCounter > 0 &&
                        <>
                            <p> The total number of products : <span>{state.itemCounter}</span></p>
                            <p> The total price of the products : <span>${state.total}</span></p>
                            <div className={style.divBut}>
                                <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                                <button onClick={() => dispatch({type: "CHECK_OUT"})}>Check Out</button>
                            </div>
                        </>
                    }

                    {
                        !state.itemCounter && !state.checkOut && <div>
                            <h3>Want To Buy ?</h3>
                            <Link to="/Products">back Shop</Link>
                        </div>
                    }

                    {
                        state.checkOut && <div>
                            <h3>Check Out Successfully</h3>
                            <Link to="/Products">Buy more</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
