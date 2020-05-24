import React, { Component } from 'react';
import { fetchPostsAction, fetchUserAction } from '../Action';
import { connect } from 'react-redux';
import UserListComponent from './userList.component';

class PostListComponent extends Component{
    componentDidMount() {
        this.props.fetchPostsAction();
    }
    render() {
        return (
            <div className="col-md-8">
                <h4>Posts:</h4>
                
                {
                    this.props.posts.splice(0,10).map(item => (
                        <div className="card" key={item.id}>
                            <div className="card-body">
                                <h4 className="card-title">Title {item.id}: {item.title}</h4>
                                <p className="card-text">Body {item.id}: {item.body}</p>
                                <button type="button" class="btn btn-outline-primary" onClick={() => this.props.fetchUserAction(item.id)}>Author</button>
                            </div>
                            <h4>User</h4>
                            <UserListComponent postId={item.id}/>
                            
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("state", state.postListCombined);
    return {
        posts: state.postListCombined
    };
    
}


export default connect(mapStateToProps, {fetchPostsAction, fetchUserAction})(PostListComponent);