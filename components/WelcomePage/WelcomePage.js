import React from "react";
import AuthNav from "../components/AuthNav/AuthNav";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to SoYummy</h1>
      <p>Please register or sign in to continue.</p>
      <AuthNav />
    </div>
  );
};

export default WelcomePage;
