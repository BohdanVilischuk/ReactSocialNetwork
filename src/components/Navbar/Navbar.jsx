import React from "react";
import s from "./Navbar.module.scss"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.navItem} ${s.active}`}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.navItem}>
        <NavLink to="/dialogs" activeClassName={s.active}> Messages</NavLink>
      </div>
      <div className={s.navItem}>
      <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.navItem}>
      <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.navItem}>
      <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;