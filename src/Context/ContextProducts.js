import React, {useState, useEffect} from 'react';
import {getApi} from "../Functions/GetApi";
// Creat Context
export const productsContext = React.createContext();

const ContextProducts = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getApi())
        }

        fetchApi()
    }, [])

    return (
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    );
};

export default ContextProducts;
