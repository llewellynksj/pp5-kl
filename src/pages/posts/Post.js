import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { BsSuitHeart, BsSuitHeartFill, BsChatDots } from "react-icons/bs";
import { axiosRes } from "../../services/axiosDefaults";
import s from "../../styles/Post.module.css";
import { MenuDropDown } from "../../components/MenuDropDown";

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
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={`${s.Card} my-2 pb-2`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`} className={`${s.Text}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={`${s.Text}`}>{updated_at}</span>
            {is_owner && postPage && (
              <MenuDropDown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img
          src={image}
          alt={`Image by ${owner} captioned ${caption}`}
          className={s.Image}
        />
      </Link>
      <Card.Body className={`${s.Text}`}>
        {caption && <Card.Text>{caption}</Card.Text>}
        {image_tag && <Card.Text>{image_tag}</Card.Text>}
        {image_tag2 && <Card.Text>{image_tag2}</Card.Text>}
        {image_tag3 && <Card.Text>{image_tag3}</Card.Text>}
        {image_tag4 && <Card.Text>{image_tag4}</Card.Text>}
        {image_tag5 && <Card.Text>{image_tag5}</Card.Text>}
      </Card.Body>
      <div className={`${s.Text} text-center p-4`}>
        {is_owner ? (
          <OverlayTrigger
            placment="top"
            overlay={<Tooltip>This post belongs to you</Tooltip>}
          >
            <BsSuitHeart size={25} />
          </OverlayTrigger>
        ) : like_id ? (
          <span onClick={handleUnlike}>
            <BsSuitHeartFill size={25} className={`${s.Heart} pr-1`} />
          </span>
        ) : currentUser ? (
          <span onClick={handleLike}>
            <BsSuitHeart size={25} className={`${s.IconOutline} pr-1`} />
          </span>
        ) : (
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Login to show your love</Tooltip>}
          >
            <BsSuitHeart size={25} className="pr-1" />
          </OverlayTrigger>
        )}
        {likes_count}
        <Link to={`/posts/${id}`} className={`${s.Text} pl-3`}>
          <BsChatDots size={25} className={`${s.IconOutline} pr-1`} />
        </Link>
        {comments_count}
      </div>
    </Card>
  );
};

export default Post;
