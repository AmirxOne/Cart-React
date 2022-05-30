import React, {useContext} from 'react';
// react-router-dom
import {Link} from "react-router-dom";
// Context
import {CartContext} from "../Context/ContextCart";
// Style
import style from "../Component-style/Navbar.module.css"

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div className={style.boxNavbar}>
            <Link to="/Products">Amir.X.One</Link>
            <Link to="/Cart">
                <div>{state.itemCounter ? <span>{state.itemCounter}</span> : ""}</div>
            </Link>
        </div>
    );
};

export default Navbar;
