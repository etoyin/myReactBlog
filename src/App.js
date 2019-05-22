import React from 'react';
import {Switch, Route} from 'react-router-dom';
//import {Link} from 'react-router-dom';
import './App.css';
import BlogPosts from './components/BlogPosts';
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={BlogPosts}/>
          <Route path="/:handle" component={Details}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
