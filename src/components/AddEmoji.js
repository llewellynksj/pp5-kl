import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";

function AddEmoji({ onEmojiClick }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    onEmojiClick(emojiObject);
    setShowEmojiPicker(false);
  };

  return (
    <div className="d-flex justify-content-end">
      <span
        type="button"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        style={{ color: "#ffcc33" }}
      >
        <BsEmojiSmileFill size={18} />
      </span>
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
    </div>
  );
}

export default AddEmoji;
