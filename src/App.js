import React from 'react';
import Store from "./Component/Store";
import Details from "./Component/Details";
// Context
import ContextProducts from "./Context/ContextProducts";
import ContextCart from "./Context/ContextCart";
// react router dom
import { Route ,Switch, Redirect } from "react-router-dom";

const App = () => {
    return (
        <ContextProducts>
            <ContextCart>
            <Switch>
                <Route path="/Products/:id" component={Details}/>
                <Route path="/Products" component={Store}/>
                <Redirect to="/Products"/>
            </Switch>
            </ContextCart>
        </ContextProducts>
    );
};

export default App;
