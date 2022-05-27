import React, { useContext } from 'react';
import StoreProducts from "./StoreProducts";

// Context
import { productsContext } from "../Context/ContextProducts";

const Store = () => {

    const products = useContext(productsContext)

    return (
        <div style={{display:"flex",flexFlow:"row Wrap",margin:"20px"}}>
            {products.map( product => <StoreProducts key={product.id} data={product}/> )}
        </div>
    );
};

export default Store;
