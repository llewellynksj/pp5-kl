import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import s from "../../styles/Profile.module.css";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import Button from "../../components/Button";

const Profile = (props) => {
  const { profile, mobile, imageSize = 45 } = props;
  const { id, following_id, image, owner } = profile;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <Link className={`align-self-center d-flex`} to={`/profiles/${id}`}>
        <div>
          <Avatar src={image} height={imageSize} />
        </div>
        <div className={`mx-2 pt-2 ${s.WordBreak}`}>
          <strong>{owner}</strong>
        </div>
      </Link>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button onClick={() => handleUnfollow(profile)}>Unfollow</Button>
          ) : (
            <Button onClick={() => handleFollow(profile)}>Follow</Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
