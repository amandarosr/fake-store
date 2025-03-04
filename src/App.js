import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartShop from './pages/CartShop';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function App() {
  return (
    <div className="fullpage">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cartShop" component={ CartShop } />
        <Route exact path="/product/:id" component={ ProductDetails } />
      </Switch>
    </div>
  );
}

export default App;
