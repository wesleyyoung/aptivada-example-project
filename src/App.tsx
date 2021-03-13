import React, { Suspense } from 'react';
import './App.css';
import {HomepageLayout} from "./components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Suspense fallback='loading'>
      <Router>
        <Switch>
          <Route path='/'>
            <HomepageLayout/>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
