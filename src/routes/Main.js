import styles from 'css/Main.module.scss';
import LoginModule from 'components/LoginModule';

const Main = () => {
  return (
    <div className={styles.big_container}>
      <div className={styles.main_container}>
        <LoginModule />
        <div className={styles.puzzle_rectangle}>
          <div className={styles.top_circle} />
          <div className={styles.right_circle} />
          <div className={styles.left_circle} />
        </div>
        <div className={styles.logo}>project</div>
        <div className={styles.subtitle}>
          Realize your idea. <br />
          We make your imagination a reality.
        </div>
      </div>
    </div>
  );
};

export default Main;
