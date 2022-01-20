import styles from "css/Navigation.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  const showModal = () => {
    setIsModalOn(true);
  };

  return (
    <>
      {isModalOn ? (
        <Modal
          modalTypeInput="SelectEngineerType"
          setIsModalOn={setIsModalOn}
        />
      ) : null}
      <div className={styles.navigation_container}>
        <div className={styles.login_container}>
          <Link to="/dev_PM_connection_service_FrontEnd">
            {loggedIn ? (
              <div></div>
            ) : (
              <button className={styles.login_btn}>log in</button>
            )}
          </Link>
        </div>
        <Link to="/mypage">
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
        <div
          className={styles.navigation_find_engineer_btn}
          onClick={showModal}
        >
          <span className={styles.find_engineer}>find engineer</span>
        </div>
        <div className={styles.logo_container}>
          <img
            height="50px"
            width="50px"
            alt="nav_puzzle_logo"
            src={process.env.PUBLIC_URL + "/img/Navigation/nav_puzzle_logo.png"}
          />
          <span>project</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
