import {connect} from 'react-redux';
import { fetchBusinesses } from '../actions/business_actions';
import BusinessIndex from './business_index';

const mSTP = (state) => ({
    businesses: Object.values(state.entities.businesses)
})

const mDTP = dispatch =>({
    fetchBusinesses: () => dispatch(fetchBusinesses())
})

export default connect(mSTP, mDTP)(BusinessIndex)