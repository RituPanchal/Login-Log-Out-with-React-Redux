import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchData, fetchGoogleAuthDetailsAction } from '../../Action/index';

class Loading extends Component{
    componentDidMount() {
        this.props.fetchData();

        this.props.fetchGoogleAuthDetailsAction();
    }
    render() {
        if (!this.props.loadingStatus.fetchGoogleAuth && !this.props.loadingStatus.fetchData){
                 
            return <div> {this.props.children} </div>
        }
        else {
            return <div>LOADING.....</div>
        }
        
    }
};

const mapStateToProps = state => {
    console.log("loading state", state);
    return state;
}

export default withRouter(connect(mapStateToProps, {fetchData, fetchGoogleAuthDetailsAction})(Loading));