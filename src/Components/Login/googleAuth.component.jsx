import React, { Component } from "react";
import { fetchGoogleAuthDetailsAction } from '../../Action/index';
import { connect } from "react-redux";
import "./css/login.css";

class GoogleAuth extends Component{
    componentDidMount() {
        // this.props.fetchGoogleAuthDetailsAction();
    }
    render() {
        if (!this.props.userAuthData) { return null;}
        return (
            <div className="name-heading">
                Hi, {this.props.userAuthData.displayName}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {userAuthData: state.userAuthData};
}
export default connect(mapStateToProps,{fetchGoogleAuthDetailsAction})(GoogleAuth);