import styles from "../css/App.module.css";
import AppRouter from "./Router";
import "@fontsource/libre-barcode-39-extended-text";
import TechStackModal from "./TechStackModal";

function App() {
  return (
    <div className={styles.app_container}>
      <AppRouter />
      <TechStackModal />
    </div>
  );
}

export default App;
