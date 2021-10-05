import { RECEIVE_ROUTE } from "../actions/route_actions";

const routeReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ROUTE:
            return Object.assign({}, {lastUrl: action.route})
        default:
            return state;
    }
}

export default routeReducer;