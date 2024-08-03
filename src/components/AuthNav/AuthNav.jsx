import React from "react";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <NavLink to="/register" className={styles.authLink}>
        Register
      </NavLink>
      <NavLink to="/signin" className={styles.authNavLink}>
        Sign In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
