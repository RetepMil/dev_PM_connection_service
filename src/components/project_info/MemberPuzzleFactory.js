import Puzzle from "components/Puzzle";
import styles from "css/ProjectInfo.module.scss";

const MemberPuzzleFactory = ({ data }) => {
  const determinePuzzleColor = (role) => {
    switch (role) {
      case "PM":
        return "rgba(255, 167, 167, 0.5)";
      case "Designer":
        return "rgba(2, 117, 252, 0.5)";
      case "FrontEnd":
        return "rgba(152, 199, 255, 0.5)";
      case "BackEnd":
        return "rgba(133, 133, 133, 0.63)";
    }
  };
  const determineHoleDirection = () => {
    let num1, num2;
    let arr = ["0", "0", "0", "0"];
    num1 = Math.floor(Math.random() * 4);
    num2 = Math.floor(Math.random() * 4);
    while (num1 == num2) {
      num2 = Math.floor(Math.random() * 4);
    }
    arr[num1] = "1";
    arr[num2] = "2";
    return {
      t: arr[0].toString(),
      b: arr[1].toString(),
      l: arr[2].toString(),
      r: arr[3].toString(),
    };
  };

  return data.map((item) => (
    <div className={styles.member_puzzle_container}>
      <Puzzle
        height="140px"
        width="140px"
        color={determinePuzzleColor(item.role)}
        {...determineHoleDirection()}
      >
        <span className={styles.member_role}>{item.role}</span>
        <br />
        <span>{item.name}</span>
      </Puzzle>
    </div>
  ));
};

export default MemberPuzzleFactory;
