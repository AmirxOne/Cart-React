import React from 'react';
import Store from "./Component/Store";
import Details from "./Component/Details";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
// Context
import ContextProducts from "./Context/ContextProducts";
import ContextCart from "./Context/ContextCart";
// react router dom
import {Route, Routes, Navigate} from "react-router-dom";

const App = () => {
    return (
        <ContextProducts>
            <ContextCart>
                <Navbar/>
                <Routes>
                    <Route path="/Products/:id" element={<Details/>}/>
                    <Route path="/Products" element={<Store/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                    <Route path="/*" element={<Navigate to="/Products"/>}/>
                </Routes>
            </ContextCart>
        </ContextProducts>
    );
};

export default App;
