import React, { useState,useEffect, createContext } from 'react';
import { getApi } from "../Functions/GetApi";

// Creat Context
export const productsContext = createContext();

const ContextProducts = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            return setProducts(await getApi())
        }
        fetchApi()
    },[])

    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ContextProducts;
