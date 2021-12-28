import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import SubjectDetail from './Components/SubjectDetail';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    
    <Navbar></Navbar>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main" component={MainPage}></Route>
        <Route exact path = "/subject/:subjectid" component={SubjectDetail}></Route>
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
