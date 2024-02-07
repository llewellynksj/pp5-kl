import Spinner from "react-bootstrap/Spinner";
import s from "../styles/Asset.module.css";

// Code from Code Institute's 'Moments' Walkthrough

const Asset = ({ spinner, src, message }) => {
  return (
    <div className={`${s.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} className={s.AssetImg} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
