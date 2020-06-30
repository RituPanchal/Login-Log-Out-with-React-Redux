import React, { Component } from 'react';
import { databas } from '../../firebase';
import Notes from '../Notes/notes.component';
import { connect } from 'react-redux';
import { pushData } from '../../Action/index';
import GoogleAuth from '../Login/googleAuth.component';
import './css/home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            snaps: ""
        }
    }

    componentDidMount() {
        // databas.on("value", (snapshot) => {
        //     this.setState({ 
        //         snaps: snapshot.val()
        //     })
        // })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let data = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.pushData(data);
        // databas.push(data);
        console.log(data);
    }

    onReset = () => {
        this.setState({
            title: " ",
            description: " "
        })
        
    }

    render() {
        console.log(this.state.snaps);
        return (
        <div className="home pt-5">
                <div className="row" className="userDetails">
                    <h4 className="heading text-uppercase">To-Do List</h4>
                    <GoogleAuth/>
                    <form className="justify-content-center" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Enter a task"/>
                        </div>
                        
                        <div className="form-group">
                            <textarea type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Enter notes"/>
                        </div>
                        <span class="d-inline-flex">
                            <button type="button" className="btn btn-outline-success custom-btn m-2" onClick={this.onSubmit}>Submit</button>
                            <button type="button" className="btn btn-outline-warning custom-btn m-2" onClick={this.onReset}>Reset</button>
                        </span>
                    </form>
                    <Notes></Notes>
                </div>
            </div>
        )
    }
}


export default connect(null, {pushData} )(Home);