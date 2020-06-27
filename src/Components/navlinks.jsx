import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleSignOut } from '../Action/index';

const NavLinks = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="#">User</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/home">Home</Link></li>
                    {
                        (!props.status)?
                            <li><Link to="/login">Login</Link></li>
                            :
                            <li><Link to="/logout" onClick={() => { props.googleSignOut() }}>Log Out</Link></li>
                    }
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log("nstate", state);
    return { status: state.userAuthData };
} 
export default connect(mapStateToProps, {googleSignOut})(NavLinks);