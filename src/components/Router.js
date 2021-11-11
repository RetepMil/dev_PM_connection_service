import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Navigation from "./Navigation";
import FindProject from "./FindProject";
import FindEngineer from "./FindEngineer";
import MyProjects from "./MyProjects";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/mypage" element={<MyProjects />}></Route>
        <Route exact path="/findproject" element={<FindProject />}></Route>
        <Route exact path="/findengineer" element={<FindEngineer />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
