import { useEffect, useState } from "react";
import styles from "css/Modal.module.scss";
import TechStackModal from "components/modals/TechStackModal";
import IntroduceModal from "components/modals/IntroduceModal";
import ApplyMessage from "components/modals/ApplyMessageModal";
import { ReactComponent as CloseButton } from "assets/closeX.svg";
import SelectEngineerType from "./modals/SelectEngineerTypeModal";
import FilterModal from "./modals/FilterModal";
import NoticeModal from "./modals/NoticeModal";
import ParticipantStatus from "./modals/ParticipantStatus";
import ApplicantCheck from "./modals/ApplicantCheck";

const availableModalTypes = [
  "TechStack",
  "Introduce",
  "ApplyMessage",
  "SelectEngineerType",
  "Filter",
  "Notice",
  "ParticipantStatus",
  "ApplicantCheck",
];

const Modal = ({ modalTypeInput, setIsModalOn }) => {
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    setModalType(modalTypeInput);
  }, []);

  const moveToAnotherModal = (modalType) => {
    setModalType(modalType);
  };
  const toggleModalWindow = () => {
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
      case "SelectEngineerType":
        return (
          <SelectEngineerType
            moveToAnotherModal={moveToAnotherModal}
            toggleModalWindow={toggleModalWindow}
          />
        );
      case "Filter":
        return <FilterModal />;
      case "Notice":
        return <NoticeModal />;
      case "ParticipantStatus":
        return <ParticipantStatus />;
      case "ApplicantCheck":
        return <ApplicantCheck />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.modal_container}>
      <CloseButton
        onClick={toggleModalWindow}
        style={{ position: "absolute", top: "22px", right: "41.5px" }}
      />
      {chooseModal(modalType)}
    </div>
  );
};

export default Modal;
