import classNames from "classnames";
import styles from "css/SelectEngineerTypeModal.module.scss";
import { Link } from "react-router-dom";

const SelectEngineerType = ({ toggleModalWindow }) => {
  return (
    <>
      <div className={styles.title}>I'm looking for...</div>
      <div className={styles.btn_container}>
        {/* Developer 버튼 ▼ */}
        <Link to="/findengineer/developer">
          <div className={styles.puzzle_body} onClick={toggleModalWindow}>
            <span className={styles.puzzle_type}>Developer</span>
            <div
              className={classNames(styles.puzzle_circles, styles.top_circle)}
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className={classNames(styles.puzzle_circles, styles.right_circle)}
            ></div>
          </div>
        </Link>
        {/* Designer 버튼 ▼ */}
        <Link to="/findengineer/designer">
          <div className={styles.puzzle_body} onClick={toggleModalWindow}>
            <span className={styles.puzzle_type}>Designer</span>
            <div
              className={classNames(styles.puzzle_circles, styles.left_circle)}
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className={classNames(styles.puzzle_circles, styles.top_circle)}
            ></div>
            <div
              className={classNames(styles.puzzle_circles, styles.right_circle)}
            ></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SelectEngineerType;
