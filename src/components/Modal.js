import { useEffect, useState } from "react";
import styles from "../css/Modal.module.css";
import TechStackModal from "./TechStackModal";
import IntroduceModal from "./IntroduceModal";
import ApplyMessage from "./ApplyMessage";

const availableModalTypes = ["TechStack", "Introduce", "ApplyMessage"];

const Modal = ({ modalTypeInput }) => {
  const [modalType, setModalType] = useState("");
  useEffect(() => {
    setModalType(modalTypeInput);
  }, []);

  const moveToAnotherModal = (modalType) => {
    setModalType(modalType);
  };

  const chooseModal = (modalType) => {
    switch (modalType) {
      case "TechStack":
        return <TechStackModal moveToAnotherModal={moveToAnotherModal} />;
      case "Introduce":
        return <IntroduceModal moveToAnotherModal={moveToAnotherModal} />;
      case "ApplyMessage":
        return <ApplyMessage moveToAnotherModal={moveToAnotherModal} />;
      default:
        return <div></div>;
    }
  };

  return <div className={styles.modal_container}>{chooseModal(modalType)}</div>;
};

export default Modal;
