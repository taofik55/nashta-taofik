import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from "./Pages/Main";
import Add from './Pages/AddEvent';
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route path="/add-event"><Add /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;