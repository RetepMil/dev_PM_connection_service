import styles from "../css/Navigation.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.navigation_container}>
      <div className={styles.login_container}>
        {loggedIn ? (
          <div></div>
        ) : (
          <button className={styles.login_btn}>log in</button>
        )}
      </div>
      <Link to="/">
        <div className={styles.navigation_my_page_btn}>
          <span className={styles.my_page}>my page</span>
        </div>
      </Link>
      <div className={styles.divider1}></div>
      <Link to="/findproject">
        <div className={styles.navigation_find_project_btn}>
          <span className={styles.find_project}>find project</span>
        </div>
      </Link>
      <div className={styles.divider2}></div>
      <Link to="/findengineer">
        <div className={styles.navigation_find_engineer_btn}>
          <span className={styles.find_engineer}>find engineer</span>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
