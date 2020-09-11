import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import TVApp from './components/TVApp'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav className='nav'><Link to ="/">Movies</Link> <Link to = "/TVApp">TVShows </Link></nav>
      <Switch>
        <Route exact path="/" render={() => <App />}/>
        <Route exact path="/TVApp" render={() => <TVApp />}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

