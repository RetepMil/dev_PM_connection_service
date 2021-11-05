import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/MyPage"></Route>
          <Route exact path="/FindProject"></Route>
          <Route exact path="/FindEngineer"></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
