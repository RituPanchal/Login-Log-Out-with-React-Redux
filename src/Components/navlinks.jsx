import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { googleSignOut } from '../Action/index';

const NavLinks = (props) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">
                TO DO LIST
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav mr-auto ml-5 mt-2 mt-lg-0">
                    <li className="nav-item active ml-3">
                        <Link to="/home" className="nav-link" >
                            <span className="active light">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item ml-3">
                        <Link to="/products" className="nav-link" >
                            <span className="active light">Products</span>
                        </Link>
                    </li>
                </ul>
                    {
                        (!props.status)?
                            <button className="btn btn-outline-success float-right">
                                <Link className="" to="/login">Login</Link>
                            </button>
                            :
                            <button className="btn btn-outline-success">
                                <Link className="" to="/logout" onClick={() => { props.googleSignOut() }}>Log Out</Link>
                            </button>
                    }
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log("nstate", state);
    return { status: state.userAuthData };
} 
export default connect(mapStateToProps, {googleSignOut})(NavLinks);