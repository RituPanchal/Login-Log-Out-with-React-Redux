import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Components/navigation';
import Home from './Components/Home/home.component';
import Login from './Components/Login/login.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { googleauth } from './firebase';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login}/>
          <Route path="/logout" exact />

          
          
        </Switch>
      </React.Fragment>
    );
    
  }
}

export default App;
