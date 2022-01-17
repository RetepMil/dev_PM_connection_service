import classNames from "classnames";
import styles from "css/SelectEngineerTypeModal.module.scss";

const SelectEngineerType = () => {
  return (
    <>
      <div className={styles.title}>I'm looking for...</div>
      <div className={styles.btn_container}>
        <div className={styles.puzzle_body}>
          <span className={styles.puzzle_type}>Developer</span>
          <div
            className={classNames(styles.puzzle_circles, styles.top_circle)}
            style={{ backgroundColor: "white" }}
          ></div>
          <div
            className={classNames(styles.puzzle_circles, styles.right_circle)}
          ></div>
        </div>
        <div className={styles.puzzle_body}>
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
      </div>
    </>
  );
};

export default SelectEngineerType;
