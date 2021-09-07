import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container'
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import BusinessIndexContainer from './business_index_container';
import BusinessShowContainer from './business_show_container';

const App = () => (
    <div>
        <header>
            <h1>spice</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route path={`/businesses/:businessId`} component={BusinessShowContainer} />
    </div>
);

export default App;