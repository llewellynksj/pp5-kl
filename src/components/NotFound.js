import React from "react";
import Asset from "./Asset";
import NoRes from "../assets/no_results.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div>
      <Asset
        src={NoRes}
        message="Oops! The page you're looking for doesn't seem to exist!"
      />
      <div className="d-flex justify-content-center">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
