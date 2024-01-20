import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import "./services/axiosDefaults";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import AddPostForm from "./pages/posts/AddPostForm";
import PostPage from "./pages/posts/PostPage";
import PostList from "./pages/posts/PostList";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import EditPostForm from "./pages/posts/EditPostForm";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostList message="No results found. Follow a user" />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostList
                message="No results found"
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/favourites"
            render={() => (
              <PostList
                message="No results found. Show your love to a post to view here!"
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />

          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route exact path="/add" render={() => <AddPostForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <EditPostForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
