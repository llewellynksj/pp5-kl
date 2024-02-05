import React, { useState } from "react";
import { axiosRes } from "../../services/axiosDefaults";
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

function EditCommentForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleEmojiSelect = (event) => {
    const icon = event.unified.split("_");
    const newArray = [];
    icon.forEach((element) => newArray.push("0x" + element));
    let emoji = String.fromCodePoint(...newArray);
    setFormContent((prevContent) => prevContent + emoji);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <InputGroup>
          <Form.Control
            as="textarea"
            value={formContent}
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
            <div className={s.EditPicker}>
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
      <div className="text-right">
        <Button onClick={() => setShowEditForm(false)} type="button">
          Cancel
        </Button>
        <Button disabled={!content.trim()} type="submit">
          Update
        </Button>
      </div>
    </Form>
  );
}

export default EditCommentForm;
