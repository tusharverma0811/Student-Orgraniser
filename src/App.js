import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Subject from './Components/Subject';
import SubjectDetails from './Components/SubjectDetails';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main" component={MainPage}></Route>
        <Route exact path = "/note" component={Subject}></Route>
        <Route exact path = "/details" component={SubjectDetails}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
