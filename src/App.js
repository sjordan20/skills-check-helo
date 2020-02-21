import React from 'react';
import { withRouter } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Auth from './components/Auth/Auth'
import routes from './routes'


import './App.css';


function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ||
        props.location.pathname === '/nav' ? (
          <>
            <Auth />
            {routes}
          </>
        ) : (
          <>
            <Nav />
            {routes}
          </>
        )}

    </div>
  );
}

export default withRouter(App);
