import { useState, useEffect } from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import s from "../styles/Buttons.module.css";

// Code adapted from Geeks for Geeks tutorial: http://tinyurl.com/mryxtxnk

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BsArrowUpSquareFill
      size={30}
      className={`${s.BackToTopButton} ${visible ? s.Show : s.Hide}`}
      onClick={scrollToTop}
    />
  );
};

export default BackToTopButton;
