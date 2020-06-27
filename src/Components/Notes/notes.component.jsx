import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchData, removeData } from '../../Action/index';

class Notes extends Component{

    componentDidMount() {
        // this.props.fetchData();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                {
                    _.map(this.props.notes, (value, key) =>(
                            <div className="card" key={key}>
                                <div className="card-body">
                                    <h4 className="card-title">{value.title}</h4>
                                    <p className="card-text">{value.description}</p>
                            </div>
                            <button type="button" className="btn btn-outline-danger" onClick={() => { this.props.removeData(key) }}>Remove</button>                            
                            </div>  
                    ))
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { notes: state.notes };
}

export default connect(mapStateToProps, {fetchData, removeData})(Notes);