import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../services/axiosDefaults";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import AddEmoji from "../../components/AddEmoji";

// Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Code adapted from Code Institute's 'Moments' Walkthrough

function AddCommentForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  const handleEmojiClick = (emojiObject) => {
    const { emoji } = emojiObject;
    if (emoji) {
      setContent(content + emoji);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <div className={`m-2 pb-2`}>
      <Form className="mt-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-0">
          <InputGroup>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
            <Form.Control
              name="comment"
              placeholder="my comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
            />
          </InputGroup>
        </Form.Group>
        <AddEmoji onEmojiClick={handleEmojiClick} />
        <Button disabled={!content.trim()} type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddCommentForm;
