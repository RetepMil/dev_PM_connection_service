import classNames from "classnames";
import styles from "css/FilterModal.module.scss";

const FilterModal = (setIsModalOn) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={styles.modal_title}>filter</div>
      <form onSubmit={onSubmit}>
        <div className={styles.filter_list_container}>
          <label>
            <input type="checkbox" name="filter_item" value="blue" /> 프론트엔드
          </label>
          <label>
            <input type="checkbox" name="filter_item" value="red" /> 백엔드
          </label>
          <label>
            <input type="checkbox" name="filter_item" value="red" /> 디자이너
          </label>
          <label>
            <input type="checkbox" name="filter_item" value="red" /> PM
          </label>
        </div>
        <input className={styles.apply_btn} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default FilterModal;
