import React, {useContext} from 'react';
import {ShortText} from "../Functions/ShortText";
// react router dom
import {Link} from "react-router-dom";
// Context
import {CartContext} from "../Context/ContextCart";
// Function
import {quantityCounter, isInProduct} from "../Functions/function";

const StoreProducts = ({data}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div style={{margin: "47px"}}>
            <img style={{width: "200px"}} src={data.image} alt="image product"/>
            <p>{ShortText(data.title)}</p>
            <p>{data.category}</p>
            <p>{data.price} $</p>
            <div>
                <Link to={`/Products/${data.id}`}>Details</Link>
                <div>
                    {quantityCounter(state, data.id) > 1 &&
                    <button onClick={() => dispatch({type: "NEGATIVE", payload: data})}> - </button>}
                    {quantityCounter(state, data.id) === 1 &&
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}> remove </button>}
                    {
                        isInProduct(state, data.id) ?
                            <button onClick={() => dispatch({type: "POSITIVE", payload: data})}> + </button> :
                            <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default StoreProducts;
