import { connect } from "react-redux";
import { updateFilter } from "../actions/filter_actions";
import NavSearch from "./nav_search";

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(null, mDTP)(NavSearch)