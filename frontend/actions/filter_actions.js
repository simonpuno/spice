import { fetchBusinessesUtil } from "../util/business_api_util";
import { fetchBusinesses } from "./business_actions";
export const UPDATE_FILTER = 'UPDATE_FILTER';


const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter,
    value: value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));

    // return fetchBusinesses(getState().ui.filters)(dispatch);
};