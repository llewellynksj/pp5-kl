import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./services/axiosDefaults";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Homepage</h1>} />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
