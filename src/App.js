import NavBar from "./components/NavBar";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <h1>This is a heading</h1>
    </div>
  );
}

export default App;
