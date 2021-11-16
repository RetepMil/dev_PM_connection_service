import styles from "../css/App.module.css";
import AppRouter from "./Router";
import "@fontsource/libre-barcode-39-extended-text";
import "typeface-mplus-1p";

function App() {
  return (
    <div className={styles.app_container}>
      <AppRouter />
    </div>
  );
}

export default App;
