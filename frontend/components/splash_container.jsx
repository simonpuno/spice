import { connect } from 'react-redux';
import Splash from './splash';
import { logoutUser } from '../actions/session_actions';
import { receiveRoute } from '../actions/route_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logoutUser()),
    receiveRoute: (route) => dispatch(receiveRoute(route))
})

export default connect(mSTP, mDTP)(Splash)