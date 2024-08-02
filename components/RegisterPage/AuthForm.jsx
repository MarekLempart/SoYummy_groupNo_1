import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/authOperations";
import css from "./AuthForm.module.css"; // Używamy 'css' jako importowanej nazwy

const AuthForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
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
    if (password !== confirmPassword) {
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
        await dispatch(register({ name, email, password }));
        navigate("/SoYummy_groupNo_1/main");
      } catch (err) {
        setErrors({ form: "Registration failed. Please try again." });
      }
    }
  };

  return (
    <div className={css.authForm}>
      <div className={css.authFormContainer}>
        <div className={css.formSection}>
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className={css.error}>{errors.name}</p>}
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className={css.error}>{errors.email}</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className={css.error}>{errors.password}</p>
              )}
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className={css.error}>{errors.confirmPassword}</p>
              )}
            </div>
            {errors.form && <p className={css.error}>{errors.form}</p>}
            <button type="submit">Sign up</button>
            <p>
              Already have an account?{" "}
              <a href="/SoYummy_groupNo_1/signin">Sign in</a>
            </p>
          </form>
        </div>
        <div className={css.imageSection}>
          <img
            src="/path/to/registerandsignin.png"
            alt="Register and Sign In"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
