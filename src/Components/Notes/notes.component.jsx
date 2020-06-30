import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchData, removeData } from '../../Action/index';
import './css/notes.css';
import FlipMove from "react-flip-move";

class Notes extends Component{

    componentDidMount() {
        // this.props.fetchData();
    }
    render() {
        return (
            <div className="notes">
                <div className="row justify-content-center">
                        {
                            _.map(this.props.notes, (value, key) => (
                                <FlipMove duration={250} easing="ease-out">
                                    <div className="card" style={{ width: "18rem"}} >
                                        <ul className="list-group list-group-flush" key={key}>
                                            <li className="card-header">{value.title}</li>
                                            <li className="list-group-item">{value.description}</li>
                                            <div className="btn-element">
                                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => { this.props.removeData(key) }}>Remove</button>                            
                                            </div>
                                        </ul> 
                                    </div>    
                                </FlipMove>
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