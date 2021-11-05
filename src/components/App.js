import styles from "../css/App.module.css";
import AppRouter from "./Router";
import Navigation from "./Navigation";
import "@fontsource/libre-barcode-39-extended-text";

function App() {
  return (
    <div className={styles.app_container}>
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
