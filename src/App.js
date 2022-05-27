import React from 'react';
import Store from "./Component/Store";
// Context
import ContextProducts from "./Context/ContextProducts";
// react router dom
import { Route ,Switch, Redirect } from "react-router-dom";

const App = () => {
    return (
        <ContextProducts>
            <Switch>
                <Route path="/Products" component={Store}/>
                <Redirect to="/Products"/>
            </Switch>
        </ContextProducts>
    );
};

export default App;
