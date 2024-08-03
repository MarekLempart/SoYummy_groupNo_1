import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register, login } from "../../Redux/authOperations";
import PropTypes from "prop-types";
import styles from "./AuthForm.module.css";

const AuthForm = ({ isRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (isRegister && password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        if (isRegister) {
          await dispatch(register({ email, password }));
        } else {
          await dispatch(login({ email, password }));
        }
        navigate("/SoYummy_groupNo_1/main"); // Redirect to MainPage after successful login/registration
      } catch (err) {
        setErrors({ form: err.message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.authForm}>
      <h2>{isRegister ? "Register" : "Sign In"}</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      {isRegister && (
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>
      )}
      <button type="submit">{isRegister ? "Sign Up" : "Sign In"}</button>
      <p>
        {isRegister ? (
          <>
            Already have an account?{" "}
            <a href="/SoYummy_groupNo_1/signin">Sign In</a>
          </>
        ) : (
          <>
            No account? <a href="/SoYummy_groupNo_1/register">Register</a>
          </>
        )}
      </p>
      {errors.form && <p className={styles.error}>{errors.form}</p>}
    </form>
  );
};

AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
};

export default AuthForm;
