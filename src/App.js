import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Thing from "./pages/Thing";
import Categorie from "./pages/Categorie";
import MainNavigation from "./Navigation/MainNavigation";
import MainFooter from "./Navigation/MainFooter";
import Login from "./pages/Login";
import SpecificCategorie from "./pages/SpecificCategorie";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <Thing />
        </Route>
        <Route path="/categorie" exact={true}>
          <Categorie />
        </Route >
        <Route path="/login" exact={true}>
          <Login/>
        </Route>
        <Route path="/specifique" exact={true}>
          <SpecificCategorie/>
        </Route>
        <Redirect to="/" />
      </Switch>
      <MainFooter/>
    </Router>
    
  );
};

export default App;
