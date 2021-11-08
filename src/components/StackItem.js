import styles from "../css/TechStackModal.module.css";

let colorPreset = ["#98C7FF", "#4FA0FF", "#087AFF"];

const selectColor = () => {
  let color = colorPreset[Math.floor(Math.random() * colorPreset.length)];
  return color;
};

const StackItems = ({ itemNames }) => {
  return (
    <>
      {itemNames.map((itemName) => {
        return (
          <div
            style={{ backgroundColor: selectColor() }}
            className={styles.stack_item}
          >
            {itemName}
          </div>
        );
      })}
    </>
  );
};

export default StackItems;
