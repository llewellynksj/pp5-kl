import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import Button from "../../components/Button";

// Styles
import s from "../../styles/Profile.module.css";
import appS from "../../App.module.css";

// Code adapted from Code Institute's 'Moments' Walkthrough

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
      <Link
        style={{ textDecoration: "none" }}
        className={`align-self-center d-flex ${mobile && "flex-column"}`}
        to={`/profiles/${id}`}
      >
        <div>
          <Avatar src={image} height={imageSize} />
        </div>
        <div className={`${appS.Link} mx-2 pt-2 ${s.WordBreak}`}>
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
