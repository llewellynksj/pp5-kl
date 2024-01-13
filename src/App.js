import NavBar from "./components/NavBar";
import styles from "./App.module.css"
import { Container } from "react-bootstrap";

function App() {
  return (
    
    <div className={styles.App}>
      <NavBar />
      <Container>
        <h1>Homepage</h1>
        <h1>Login</h1>
        <h1>Register</h1>
      </Container>
    </div>
  );
}

export default App;
