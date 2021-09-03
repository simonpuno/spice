import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser } from '../actions/session_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(loginUser(user)),
    demoLogin: user => dispatch(loginUser(user))
});

export default connect(mSTP, mDTP)(SessionForm);