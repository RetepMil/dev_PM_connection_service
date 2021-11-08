import styles from "../css/TechStackModal.module.css";
import StackItems from "./StackItem";

let developStackNames = [
  // later receive data from backend server
  "JavaScript",
  "React",
  "NGINX",
  "Ruby",
  "Redis",
  "Redux",
  "nodeJS",
];

let designStackNames = [
  "Illustrator",
  "zeplin",
  "Rhino",
  "AdobeXD",
  "photoshop",
  "Figma",
  "AfterEffects",
  "Sketch",
  "photo.io",
];

let managerStackNames = ["App Service", "Web Service"];

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
        <StackItems itemNames={developStackNames} />
      </div>
      <div className={styles.stack_container}>
        <div
          className={styles.stack_type}
          style={{ left: "464px", top: "105px" }}
        >
          designer
        </div>
        <StackItems itemNames={designStackNames} />
      </div>
      <div className={styles.stack_container}>
        <div
          className={styles.stack_type}
          style={{ left: "809px", top: "105px" }}
        >
          manager
        </div>
        <StackItems itemNames={managerStackNames} />
      </div>
    </div>
  );
};

export default TechStackModal;
