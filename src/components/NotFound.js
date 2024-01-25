import React from "react";
import Asset from "./Asset";
import NoRes from "../assets/no_results.png";
import Button from "./Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="text-center lead">
      <Asset
        src={NoRes}
        message="Oops! The page you're looking for doesn't seem to exist!"
      />
      <div className="d-flex justify-content-center">
        <Button onClick={handleClick}>
          Home
          {/* <div className="d-flex justify-content-center">
          <Link to="/">Home</Link>
        </div> */}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
