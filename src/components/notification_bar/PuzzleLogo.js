import styles from "css/Navigation.module.scss";

const PuzzleLogo = () => {
  return (
    <div className={styles.logo_container}>
      <img
        height="50px"
        width="50px"
        alt="nav_puzzle_logo"
        src={process.env.PUBLIC_URL + "/img/Navigation/nav_puzzle_logo.png"}
      />
      <span>project</span>
    </div>
  );
};

export default PuzzleLogo;
