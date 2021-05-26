import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Home from './Pages/Home';
import About from './Pages/About';
import LogIn from './Pages/LogIn';
import Projects from './Pages/Projects';
import Admin from './Pages/Admin';

export const Routes = () => {
    return (
        <Switch>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>       
          <Route path="/" exact>
            <Home />
          </Route>
      </Switch>
    )
}
