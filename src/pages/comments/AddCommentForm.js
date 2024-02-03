import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosRes } from "../../services/axiosDefaults";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import useClickOutsideToggle from "../../hooks/useClickOutsideToggle";

// Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Styles
import s from "../../styles/AddEditCommentForm.module.css";

function AddCommentForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleEmojiSelect = (event) => {
    const icon = event.unified.split("_");
    const newArray = [];
    icon.forEach((element) => newArray.push("0x" + element));
    let emoji = String.fromCodePoint(...newArray);
    setContent(content + emoji);
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
        <Form.Group>
          <InputGroup>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
            <Form.Control
              placeholder="my comment..."
              as="textarea"
              value={content}
              onChange={handleChange}
              rows={2}
              className={s.TextareaIcon}
            />
            <span
              ref={ref}
              onClick={() => setExpanded(!expanded)}
              className={s.EmojiBtn}
            >
              <BsEmojiSmile size={18} />
            </span>
            {expanded && (
              <div className={s.Picker}>
                <Picker
                  data={data}
                  emojiSize={18}
                  emojiButtonSize={25}
                  onEmojiSelect={handleEmojiSelect}
                  maxFrequentRows={0}
                  perLine={12}
                />
              </div>
            )}
          </InputGroup>
        </Form.Group>
        <Button disabled={!content.trim()} type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddCommentForm;
