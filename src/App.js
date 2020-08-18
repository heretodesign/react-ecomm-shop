import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProductItemPage from './pages/ProductItemPage'
import ProductListPage from './pages/ProductListPage'
import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ProductItemPage} />
          <Route path="/cc" exact component={ProductListPage} />
          <Route path="/landing" exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
