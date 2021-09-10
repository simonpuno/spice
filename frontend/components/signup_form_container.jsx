import { connect } from 'react-redux';
import SessionForm from './session_form';
import { loginUser, signupUser, switchPage } from '../actions/session_actions';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = (dispatch) => ({
    processForm: user => dispatch(signupUser(user)),
    demoLogin: user => dispatch(loginUser(user)),
    switchPage: () => dispatch(switchPage())
});

export default connect(mSTP, mDTP)(SessionForm);