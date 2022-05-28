import React from 'react';
import {ShortText} from "../Functions/ShortText";
// react router dom
import { Link } from "react-router-dom";
// Context


const StoreProducts = (props) => {

    const { image, title, category, price, id } = props.data



    return (
        <div style={{margin: "47px"}}>
            <img style={{width:"200px"}} src={image} alt="image product"/>
            <p>{ShortText(title)}</p>
            <p>{category}</p>
            <p>{price} $</p>
            <Link to={`/Products/${id}`}>Details</Link>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default StoreProducts;
