import React, { Component } from 'react';
import PostListComponent from './Components/PostList.component';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PostListComponent />
        </div>
      </div>
    );
    
  }
}

export default App;
