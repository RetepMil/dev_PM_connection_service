import styles from "../css/TechStackModal.module.css";

const TechStackModal = () => {
  return (
    <div className={styles.modal_container}>
      <div className={styles.tech_stack_title}>Tech Stack</div>
      <div className={styles.stack_container}>
        <div
          className={styles.stack_type}
          style={{ left: "107px", top: "105px" }}
        >
          developer
        </div>
      </div>
      <div className={styles.stack_container}>
        <div
          className={styles.stack_type}
          style={{ left: "464px", top: "105px" }}
        >
          designer
        </div>
      </div>
      <div className={styles.stack_container}>
        <div
          className={styles.stack_type}
          style={{ left: "809px", top: "105px" }}
        >
          manager
        </div>
      </div>
    </div>
  );
};

export default TechStackModal;
