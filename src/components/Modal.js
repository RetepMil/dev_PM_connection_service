import { useEffect, useState } from "react";
import styles from "css/Modal.module.scss";
import TechStackModal from "components/modals/TechStackModal";
import IntroduceModal from "components/modals/IntroduceModal";
import ApplyMessage from "components/modals/ApplyMessageModal";
import { ReactComponent as CloseButton } from "assets/closeX.svg";

const availableModalTypes = ["TechStack", "Introduce", "ApplyMessage"];

const Modal = ({ modalTypeInput, setIsModalOn }) => {
  const [modalType, setModalType] = useState("");
  useEffect(() => {
    setModalType(modalTypeInput);
  }, []);

  const moveToAnotherModal = (modalType) => {
    setModalType(modalType);
  };
  const closeModalWindow = () => {
    setIsModalOn(false);
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

  return (
    <div className={styles.modal_container}>
      <CloseButton
        onClick={closeModalWindow}
        style={{ position: "absolute", top: "22px", right: "41.5px" }}
      />
      {chooseModal(modalType)}
    </div>
  );
};

export default Modal;
