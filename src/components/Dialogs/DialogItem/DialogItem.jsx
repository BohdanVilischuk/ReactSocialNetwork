import React from "react";
import s from "./../Dialogs.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink activeClassName={s.active} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
