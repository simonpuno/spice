import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import {fetchBusinesses, fetchBusiness} from './actions/business_actions'
import {fetchBusinessesUtil} from './util/business_api_util';
import {updateFilter} from './actions/filter_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBusinessesUtil = fetchBusinessesUtil;
    window.fetchBusinesses = fetchBusinesses
    window.fetchBusiness = fetchBusiness
    window.updateFilter = updateFilter;
    // window.signup = signup
    // window.login = login 
    // window.logout = logout

    ReactDOM.render(<Root store={store} />, root);
});