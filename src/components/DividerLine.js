// Styles
import s from "../styles/DividerLine.module.css";

const DividerLine = () => {
  return (
    <div className={s.Divider}>
      <div className={s.DividerInner}></div>
      <span className={s.DividerSpan}>
        <i className={`fa-solid fa-droplet ${s.DividerIcon}`}></i>
      </span>
    </div>
  );
};

export default DividerLine;
