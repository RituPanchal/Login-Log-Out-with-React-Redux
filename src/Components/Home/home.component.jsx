import React, { Component } from 'react';
import { databas } from '../../firebase';
import Notes from '../Notes/notes.component';
import { connect } from 'react-redux';
import { pushData } from '../../Action/index';
import GoogleAuth from '../Login/googleAuth.component';

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
        <div className="container">
                <div className="row">
                    <h4>User Details</h4>
                    <GoogleAuth/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange}/>
                        </div>
                        
                        <div className="form-group">
                            <textarea type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange}/>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={this.onSubmit}>Submit</button>
                        <button type="button" className="btn btn-outline-primary" onClick={this.onReset}>Reset</button>
                    </form>
                    <Notes></Notes>
                </div>
            </div>
        )
    }
}


export default connect(null, {pushData} )(Home);