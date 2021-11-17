import styles from "../css/Modal.module.css";
import apply_styles from "../css/ModalApply.module.scss";
import { ReactComponent as PrevArrow } from "../assets/prevArrow.svg";
import { ReactComponent as CloseButton } from "../assets/closeX.svg";
import { useState } from "react";

const ApplyMessage = ({ moveToAnotherModal }) => {
  const [text, setText] = useState("");
  const prevModalType = "Introduce";

  const onSubmit = async (event) => {
    event.preventDefault();
    setText("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  return (
    <div>
      <PrevArrow
        style={{ position: "absolute", top: "48px", left: "35%" }}
        onClick={() => moveToAnotherModal(prevModalType)}
      />
      <div className={styles.modal_title}>Apply</div>
      <form onSubmit={onSubmit}>
        <div className={apply_styles.textarea_container}>
          <textarea
            className={apply_styles.textarea}
            placeholder="하고 싶은 말을 여기에 적어주세요"
            onChange={onChange}
            required
          />
        </div>
        <button
          className={`${apply_styles.btn} ${apply_styles.join_btn}`}
          onSubmit={onSubmit}
        >
          join
        </button>
        <button
          className={`${apply_styles.btn} ${apply_styles.delete_btn}`}
          onSubmit={onSubmit}
        >
          delete
        </button>
      </form>
    </div>
  );
};

export default ApplyMessage;
