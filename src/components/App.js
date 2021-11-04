import styles from "../css/App.module.css";
import AppRouter from "./Router";

function App() {
  return (
    <div className={styles.app_container}>
      <AppRouter />
    </div>
  );
}

export default App;
