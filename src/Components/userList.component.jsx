import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserAction } from '../Action';
 
class UserListComponent extends Component {
    constructor(props) {
        // console.log("props", props);
        super();
        // this.state = {
        //     postId: postId
        // }
    }
    // componentDidMount() {
    //     this.props.fetchUserAction();
    // }
    render() {
        if(!this.props.users){return null}
        return (
                <div className="col-md-8" >
                    {this.props.users.name}
                </div> 
            )
    }
}

const mapStateToProps = (state, ownstate) => {
    // console.log("searchUserID", state)
    console.log("ownstate", ownstate);
    console.log("state", state);

    return {
        // users: state.userListCombined

        users: state.userListCombined.find(items => items.id === ownstate.postId)
        //comparing userlist's ids and post's ids that comes through props
    };
}
export default connect(mapStateToProps, { fetchUserAction })(UserListComponent);

