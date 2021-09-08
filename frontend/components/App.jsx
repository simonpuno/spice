import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting_container'
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import BusinessIndexContainer from './business_index_container';
import BusinessShowContainer from './business_show_container';
import CreateReviewFormContainer from './create_review_form_container'

const App = () => (
    <div className='app'>
        <header>
            <GreetingContainer />
        </header>

        {/* <Route exact path='/'/> */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route  exact path={`/businesses/:businessId`} component={BusinessShowContainer} />
        <Route exact path={`/businesses/:businessId/reviews/new`} component={CreateReviewFormContainer} />
    </div>
);

export default App;