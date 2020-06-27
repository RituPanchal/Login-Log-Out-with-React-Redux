import React, { Component } from 'react';
import NavLinks from './navlinks';
// import { connect } from "react-redux";

class Navigation extends Component{
    render() {
        return (
            <React.Fragment>
                <NavLinks/>

            </React.Fragment>
        )
    }
}

export default Navigation;