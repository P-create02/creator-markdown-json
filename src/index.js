import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateJson from './CreateJson'
import CreateMarkdown from './CreateMarkdown'
import ErrorPage from './ErrorPage'
import DarkOrL from './DarkOrL'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DarkOrL />
        <Switch>

          <Route exact path='/'>
            <App />
          </Route>
          <Route path='/json'>
            <CreateJson />
          </Route>
          <Route path='/markdown'>
            <CreateMarkdown />
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>

        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);