import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main" component={MainPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
