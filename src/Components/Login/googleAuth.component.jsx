import React, { Component } from "react";
import { fetchGoogleAuthDetailsAction } from '../../Action/index';
import { connect } from "react-redux";

class GoogleAuth extends Component{
    componentDidMount() {
        // this.props.fetchGoogleAuthDetailsAction();
    }
    render() {
        if (!this.props.userAuthData) { return null;}
        return (
            <div className="container">
                Hi, {this.props.userAuthData.email}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {userAuthData: state.userAuthData};
}
export default connect(mapStateToProps,{fetchGoogleAuthDetailsAction})(GoogleAuth);