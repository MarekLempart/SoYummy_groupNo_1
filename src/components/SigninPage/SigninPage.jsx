import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import css from "./SigninPage.module.css";

const SigninPage = () => {
  return (
    <div className={css.signinContainer}>
      <h2 className={css.signinTitle}>Sign In</h2>
      <AuthForm />
    </div>
  );
};

export default SigninPage;
