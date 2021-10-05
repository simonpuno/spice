import { combineReducers } from "redux";
import filtersReducer from "./filters_reducer";
import routeReducer from "./route_reducer";

const uiReducer = combineReducers({
    filters: filtersReducer,
    route: routeReducer
})

export default uiReducer;