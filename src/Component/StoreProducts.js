import React from 'react';
import {ShortText} from "../Functions/ShortText";

const StoreProducts = (props) => {

    const { image, title, category, price } = props.data

    return (
        <div style={{margin: "47px"}}>
            <img style={{width:"200px"}} src={image} alt="image product"/>
            <p>{ShortText(title)}</p>
            <p>{category}</p>
            <div>
                <span>{price} $</span>
            </div>
        </div>
    );
};

export default StoreProducts;
