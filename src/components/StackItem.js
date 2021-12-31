import styles from "css/Modal.module.scss";

let colorPreset = ["#98C7FF", "#4FA0FF", "#087AFF", "#D4D4D4"];
let dirPreset = [styles.t, styles.b, styles.r, styles.l];
/* Color and hole direction can later be specified if necessary */

const selectColor = () =>
  colorPreset[Math.floor(Math.random() * colorPreset.length)];

const StackItems = ({ itemNames }) => {
  return (
    <>
      {itemNames.map((itemName) => {
        let color = selectColor();

        return (
          <div
            style={{ backgroundColor: color }}
            className={styles.stack_item}
            key={itemName}
          >
            <span className={styles.stack_item_name}>{itemName}</span>
            {dirPreset.map((dotDirectionClass) => {
              let dotColor = Math.random() < 0.5 ? color : "white";
              return (
                <div
                  className={`${dotDirectionClass} ${styles.dot}`}
                  style={{ backgroundColor: dotColor }}
                  key={dotDirectionClass}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default StackItems;
