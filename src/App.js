import React from 'react';
import Store from "./Component/Store";
import Details from "./Component/Details";
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
// Context
import ContextProducts from "./Context/ContextProducts";
import ContextCart from "./Context/ContextCart";
// react router dom
import {Route, Switch, Redirect} from "react-router-dom";

const App = () => {
    return (
        <ContextProducts>
            <ContextCart>
                <Navbar/>
                <Switch>
                    <Route path="/Products/:id" component={Details}/>
                    <Route path="/Products" component={Store}/>
                    <Route path="/Cart" component={Cart}/>
                    <Redirect to="/Products"/>
                </Switch>
            </ContextCart>
        </ContextProducts>
    );
};

export default App;
