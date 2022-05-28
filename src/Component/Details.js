import React, { useContext } from 'react';

// Context
import {productsContext} from "../Context/ContextProducts";

const Details = (props) => {
    const id = props.match.params.id;
    const products = useContext(productsContext);
    const product = products [id - 1]
    const { image, title, description, price } = product

    return (
        <div style={{margin:"20px"}}>
            <img style={{width:"200px"}} src={image} alt="image product"/>
            <p>{title}</p>
            <p>{description}</p>
            <span>{price} $</span>
        </div>
    );
};

export default Details;
