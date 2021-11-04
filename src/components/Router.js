import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/"></Route>
        <Route exact path="/MyPage"></Route>
        <Route exact path="/FindProject"></Route>
        <Route exact path="/FindEngineer"></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
