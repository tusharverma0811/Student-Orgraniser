import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
<<<<<<< .merge_file_a05548
import SubjectDetail from './Components/SubjectDetail';

=======
import Subject from './Components/Subject';
import SubjectDetails from './Components/SubjectDetails';
>>>>>>> .merge_file_a18896
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/main" component={MainPage}></Route>
<<<<<<< .merge_file_a05548
        <Route exact path = "/subject/:subjectid" component={SubjectDetail}></Route>
=======
        <Route exact path = "/note" component={Subject}></Route>
        <Route exact path = "/details" component={SubjectDetails}></Route>
>>>>>>> .merge_file_a18896
      </Switch>
    </BrowserRouter>
  );
}

export default App;
