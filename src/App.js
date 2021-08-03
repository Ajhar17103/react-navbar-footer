import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
 
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router basename='/react-navbar-footer'>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
           
        </Switch>
      </Router>
    </>
  );
}

export default App;
