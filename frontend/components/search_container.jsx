import { connect } from "react-redux";
import { updateFilter } from "../actions/filter_actions";
import Search from "./search";

// const mSTP = state => ({null: null})

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(null, mDTP)(Search)