import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {
  BsTrash3Fill,
  BsFillPenFill,
  BsKeyFill,
  BsPersonFillGear,
} from "react-icons/bs";

// Bootstrap
import Dropdown from "react-bootstrap/Dropdown";

// Styles
import s from "../styles/MenuDropDown.module.css";

// Code from Code Institute's 'Moments' Walkthrough

const EditMenu = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`fa-solid fa-pen-to-square ${s.Hover}`}
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
      <Dropdown.Toggle as={EditMenu} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={s.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <BsFillPenFill /> Edit
        </Dropdown.Item>
        <Dropdown.Item
          className={s.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <BsTrash3Fill /> Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function UpdateProfileDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${s.Absolute}`} drop="left">
      <Dropdown.Toggle as={EditMenu} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/update`)}
          aria-label="update-profile"
        >
          <BsFillPenFill /> Update profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/update/username`)}
          aria-label="update-username"
        >
          <BsPersonFillGear />
          Change Username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/update/password`)}
          aria-label="update-password"
        >
          <BsKeyFill />
          Change Password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
