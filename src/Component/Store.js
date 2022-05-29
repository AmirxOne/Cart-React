import React, { useContext } from 'react';
import StoreProducts from "./StoreProducts";

// Context
import { productsContext } from "../Context/ContextProducts";
// Style
import style from "../Component-style/Store.module.css"

const Store = () => {

    const products = useContext(productsContext)

    return (
        <div className={style.boxStore}>
            {products.map((product) => <StoreProducts key={product.id} data={product}/> )}
        </div>
    );
};

export default Store;
