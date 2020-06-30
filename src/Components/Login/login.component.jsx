import React, { Component } from 'react';
import GoogleAuth from '../Login/googleAuth.component';
import { connect } from 'react-redux';
import { googleAuthAction, fetchGoogleAuthDetailsAction } from '../../Action';
import './css/login.css';

class Login extends Component{
    componentDidMount() {
        // this.props.fetchGoogleAuthDetailsAction();
    }
    render() {
        return (
            <div className="login justify-content-center">
                <div className="login-head">Please login here:</div>
                    <button type="button" className="login-btn btn btn-outline-warning" onClick={() => { this.props.googleAuthAction() }}>Sign via Google</button>
                    <GoogleAuth/>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { item: state.userAuthData};
}
export default connect(mapStateToProps, {googleAuthAction, fetchGoogleAuthDetailsAction})(Login);