import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/users' component={Users} />
            <Route path='/todos' component={Todos} />
            <Route path='/posts' component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
