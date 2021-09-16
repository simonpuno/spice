import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = {
    ya: ''
}

const filtersReducer = (state=defaultFilters, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_FILTER:
            let newState = {
                [action.filter]: action.value 
            };
            return Object.assign({}, newState)
        default:
            return state;
    }
}

export default filtersReducer;