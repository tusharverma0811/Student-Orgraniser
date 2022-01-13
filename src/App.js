import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import SubjectDetail from './Components/SubjectDetail';
<<<<<<< HEAD
import Header from "./Components/Header";
=======
import Navbar from './Components/Navbar';
>>>>>>> 268022f6c6ba87e068ecd5f8a47b9dac3cc4d8f0

function App() {
  return (
    <>
    
    <Navbar></Navbar>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main" component={MainPage}></Route>
        <Route exact path="/navbar" component={Header}></Route>
        <Route exact path = "/subject/:subjectid" component={SubjectDetail}></Route>
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
