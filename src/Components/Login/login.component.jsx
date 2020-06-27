import React, { Component } from 'react';
import GoogleAuth from '../Login/googleAuth.component';
import { connect } from 'react-redux';
import {googleAuthAction, fetchGoogleAuthDetailsAction} from '../../Action';

class Login extends Component{
    componentDidMount() {
        // this.props.fetchGoogleAuthDetailsAction();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <button type="button" className="btn btn-outline-warning" onClick={() => { this.props.googleAuthAction() }}>Sign via Google</button>
                    <GoogleAuth/>
                </div>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { item: state.userAuthData};
}
export default connect(mapStateToProps, {googleAuthAction, fetchGoogleAuthDetailsAction})(Login);