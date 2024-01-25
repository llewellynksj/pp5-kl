import s from "../styles/Button.module.css";

const Button = ({ type = "button", children, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={s.Button}>
      {children}
    </button>
  );
};

export default Button;
