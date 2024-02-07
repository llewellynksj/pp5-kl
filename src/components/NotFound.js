import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Asset from "./Asset";
import NoRes from "../assets/no_results.png";
import Button from "./Button";

const NotFound = () => {
  const currentUser = useCurrentUser();

  const loggedOutHomeBtn = (
    <Link to="/">
      <Button>Home</Button>
    </Link>
  );

  const loggedInHomeBtn = (
    <Link to="/feed">
      <Button>Home</Button>
    </Link>
  );

  return (
    <div className="text-center lead">
      <Asset
        src={NoRes}
        message="Oops! The page you're looking for doesn't seem to exist!"
      />
      <div className="d-flex justify-content-center">
        {currentUser ? loggedInHomeBtn : loggedOutHomeBtn}
      </div>
    </div>
  );
};

export default NotFound;
