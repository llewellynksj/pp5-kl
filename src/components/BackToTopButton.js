import { useState } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import s from "../styles/Buttons.module.css";

// Code adapted from Geeks for Geeks tutorial: http://tinyurl.com/mryxtxnk
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <BsArrowUpSquareFill
      size={30}
      className={s.ScrollButton}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default BackToTopButton;
