import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Navigation from "./Navigation";
import FindProject from "./FindProject";
import FindEngineer from "./FindEngineer";
import MyProjects from "./MyProjects";
import ProjectInfo from "./ProjectInfo";

const AppRouter = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          exact
          path="/dev_PM_connection_service_FrontEnd"
          element={<Main />} /*Only used during development*/
        ></Route>
        <Route exact path="/mypage" element={<MyProjects />}></Route>
        <Route exact path="/findproject" element={<FindProject />}></Route>
        <Route exact path="/findengineer" element={<FindEngineer />}></Route>
        <Route exact path="/project/:id" element={<ProjectInfo />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
