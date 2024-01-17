import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { TiHeartOutline, TiHeart } from "react-icons/ti";
import { LiaCommentDots } from "react-icons/lia";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    caption,
    image_tag,
    image_tag2,
    image_tag3,
    image_tag4,
    image_tag5,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={`Image by ${owner} captioned ${caption}`} />
      </Link>
      <Card.Body>
        {caption && <Card.Text>{caption}</Card.Text>}
        {image_tag && <Card.Text>{image_tag}</Card.Text>}
        {image_tag2 && <Card.Text>{image_tag2}</Card.Text>}
        {image_tag3 && <Card.Text>{image_tag3}</Card.Text>}
        {image_tag4 && <Card.Text>{image_tag4}</Card.Text>}
        {image_tag5 && <Card.Text>{image_tag5}</Card.Text>}
      </Card.Body>
      <div>
        {is_owner ? (
          <OverlayTrigger
            placment="top"
            overlay={<Tooltip>This post belongs to you</Tooltip>}
          >
            <TiHeartOutline size={25} />
          </OverlayTrigger>
        ) : like_id ? (
          <span onClick={() => {}}>
            <TiHeart size={25} />
          </span>
        ) : currentUser ? (
          <span onClick={() => {}}>
            <TiHeartOutline size={25} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Login to show your love</Tooltip>}
          >
            <TiHeartOutline size={25} />
          </OverlayTrigger>
        )}
        {likes_count}
        <Link to={`/posts/${id}`}>
          <LiaCommentDots size={25} />
        </Link>
        {comments_count}
      </div>
    </Card>
  );
};

export default Post;
