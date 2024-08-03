import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.registerContainer}>
      <h2 className={css.registerTitle}>Register</h2>
      <AuthForm isRegister />
    </div>
  );
};

export default RegisterPage;
