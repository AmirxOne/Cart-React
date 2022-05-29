import React, {useContext} from 'react';
import {ShortText} from "../Functions/ShortText";
// react router dom
import {Link} from "react-router-dom";
// Context
import {CartContext} from "../Context/ContextCart";
// Function
import {quantityCounter, isInProduct} from "../Functions/function";
// Style
import style from "../Component-style/StoreProducts.module.css"

const StoreProducts = ({data}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={style.boxStoreProduct}>
            <div className={style.boxImage}>
                <img className={style.imageProduct} src={data.image} alt="image product"/>
            </div>
            <div className={style.titlePrice}>
                <p className={style.title}>{ShortText(data.title)}</p>
                <p className={style.price}>${data.price}</p>
            </div>

            <div className={style.boxDB}>
                <Link to={`/Products/${data.id}`}>Details</Link>
                <div className={style.But}>
                    {quantityCounter(state, data.id) > 1 &&
                    <button className={style.BNeg} onClick={() => dispatch({type: "NEGATIVE", payload: data})}> </button>}
                    {quantityCounter(state, data.id) === 1 &&
                    <button className={style.BRem} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}> </button>}
                    {quantityCounter(state, data.id) > 0 && <span>{quantityCounter(state, data.id)}</span>}
                    {
                        isInProduct(state, data.id) ?
                            <button className={style.BPos} onClick={() => dispatch({type: "POSITIVE", payload: data})}> </button> :
                            <button className={style.BAdd} onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default StoreProducts;
