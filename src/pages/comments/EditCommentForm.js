import React, { useState } from "react";
import { axiosRes } from "../../services/axiosDefaults";
import Button from "../../components/Button";
import AddEmoji from "../../components/AddEmoji";

// Bootstrap
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Styles
import s from "../../styles/AddEditCommentForm.module.css";

// Code adapted from Code Institute's 'Moments' Walkthrough

function EditCommentForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleEmojiClick = (emojiObject) => {
    const { emoji } = emojiObject;
    if (emoji) {
      setFormContent(formContent + emoji);
    }
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
      <Form.Group className="pr-1 mb-0">
        <InputGroup>
          <Form.Control
            as="textarea"
            value={formContent}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <AddEmoji onEmojiClick={handleEmojiClick} />
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
