import React, {useContext} from 'react';
import CartProducts from "./CartProducts";
// Context
import {CartContext} from "../Context/ContextCart";
import {Link} from "react-router-dom";

const Cart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
            {state.selectItem.map(product => <CartProducts key={product.id} cartData={product}/>)}
            <div>

                {
                    state.itemCounter > 0 &&
                    <>
                        <p> The total number of products : {state.itemCounter} </p>
                        <p> The total price of the products : {state.total} $ </p>
                        <button onClick={() => dispatch({type: "CLEAR"})}>clear</button>
                        <button onClick={() => dispatch({type: "CHECK_OUT"})}>check out</button>
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
    );
};

export default Cart;
