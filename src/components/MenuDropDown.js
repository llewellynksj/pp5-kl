import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import s from "../styles/MenuDropDown.module.css";
import { BsTrash3Fill, BsFillPenFill } from "react-icons/bs";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MenuDropDown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={s.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <BsFillPenFill />
        </Dropdown.Item>
        <Dropdown.Item
          className={s.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <BsTrash3Fill />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
