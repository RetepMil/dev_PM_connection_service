import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "routes/Main";
import Navigation from "components/Navigation";
import FindProject from "routes/FindProject";
import FindEngineer from "routes/FindEngineer";
import MyPage from "routes/MyPage";
import ProjectInfo from "routes/ProjectInfo";
import MyProjects from "routes/MyProjects";
import OurProjects from "routes/OurProjects";

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
        <Route exact path="/mypage" element={<MyPage />}></Route>
        <Route exact path="/mypage/myprojects" element={<MyProjects />}></Route>
        <Route
          exact
          path="/mypage/ourprojects"
          element={<OurProjects />}
        ></Route>
        <Route exact path="/findproject" element={<FindProject />}></Route>
        <Route exact path="/findengineer" element={<FindEngineer />}></Route>
        <Route exact path="/project/:id" element={<ProjectInfo />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
