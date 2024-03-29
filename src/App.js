import { Route, Switch } from "react-router-dom";
import "./services/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import NavBar from "./components/NavBar";
import RegisterForm from "./pages/auth/RegisterForm";
import LoginForm from "./pages/auth/LoginForm";
import AddPostForm from "./pages/posts/AddPostForm";
import PostPage from "./pages/posts/PostPage";
import PostList from "./pages/posts/PostList";
import EditPostForm from "./pages/posts/EditPostForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UpdateProfileForm from "./pages/profiles/UpdateProfileForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// Bootstrap
import Container from "react-bootstrap/Container";

// Styles
import styles from "./App.module.css";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <>
      <div className={styles.App}>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/feed" render={() => <PostList />} />
            <Route
              exact
              path="/following"
              render={() => (
                <PostList
                  message="No results found. Start following someone to view their posts here!"
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              )}
            />
            <Route
              exact
              path="/followers"
              render={() => (
                <PostList
                  message="No results found. Nobody is following you yet. Keep posting!"
                  filter={`owner__following__followed__profile=${profile_id}&`}
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
            <Route
              exact
              path="/trending"
              render={() => (
                <PostList
                  message="No results found"
                  filter="ordering=-likes_count"
                />
              )}
            />

            <Route exact path="/login" render={() => <LoginForm />} />
            <Route exact path="/register" render={() => <RegisterForm />} />
            <Route exact path="/add" render={() => <AddPostForm />} />
            <Route exact path="/posts/:id" render={() => <PostPage />} />
            <Route
              exact
              path="/posts/:id/edit"
              render={() => <EditPostForm />}
            />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route
              exact
              path="/profiles/:id/update/username"
              render={() => <UsernameForm />}
            />
            <Route
              exact
              path="/profiles/:id/update/password"
              render={() => <UserPasswordForm />}
            />
            <Route
              exact
              path="/profiles/:id/update"
              render={() => <UpdateProfileForm />}
            />
            <Route render={() => <NotFound />} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
