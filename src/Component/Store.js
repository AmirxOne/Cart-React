import React, {useContext} from 'react';
import StoreProducts from "./StoreProducts";
// Context
import {productsContext} from "../Context/ContextProducts";
// Style
import style from "../Component-style/Store.module.css"
// image
import lodGif from "../image/Gif/Ripple-1s-200px (1).gif"

const Store = () => {

    const products = useContext(productsContext)

    return (
        <>
            {
                products.length !== 0 ?
                    <div className={style.boxStore}>
                        {products.map((product) => <StoreProducts key={product.id} data={product}/>)}
                    </div> :
                    <div className={style.boxLoading}><img src={lodGif} alt=""/></div>
            }
        </>
    );
};

export default Store;
