import {connect} from 'react-redux';
import {fetchBusinesses} from '../actions/business_actions';
// import {updateFilter} from '../actions/filter_actions'
import BusinessIndex from './business_index';

const mSTP = (state) => ({
    businesses: Object.values(state.entities.businesses),
    filters: state.ui.filters 
})

const mDTP = dispatch =>({
    fetchBusinesses: (type) => dispatch(fetchBusinesses(type))
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(BusinessIndex)