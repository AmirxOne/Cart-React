import React, { useContext } from 'react';
// react-router-dom
import { Link } from "react-router-dom";
// Context
import {CartContext} from "../Context/ContextCart";

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <Link to="/Products" >Products</Link>
            <Link to="/Cart"><p>Cart Store : {state.itemCounter}</p></Link>
        </div>
    );
};

export default Navbar;
