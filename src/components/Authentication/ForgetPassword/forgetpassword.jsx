import styles from "./forgetpassword.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {

  const handleResetChange =() =>{

  }
  const handleInputChange = () =>{

  }
  return (
    <>
      <ToastContainer />
      <div className={styles.verification}>
        <form className={styles.form} onSubmit={handleResetChange}>
          <div className={styles.title}>Reset Password</div>
          {/* <div className={styles.title}>Verification Code</div> */}
          <p className={styles.message}>
            Just provide a valid information to reset your account password.
          </p>
          <div className={styles["input-email"]}>
            <label htmlFor="email">
              <TextField
                id="standard-basic"
                label="Enter your email"
                placeholder="Your Email"
                variant="standard"
                name="email"
                onChange={handleInputChange}
                className={styles.textField}
                required
              />
            </label>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="code">
              <TextField
                id="standard-basic"
                label="Enter 5-digit code"
                placeholder="Code"
                variant="standard"
                name="code"
                onChange={handleInputChange}
                className={styles.textField}
                required
              />
            </label>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="new_password">
              <TextField
                id="standard-basic"
                type="password"
                label="Enter new password"
                variant="standard"
                placeholder="password"
                name="new_password"
                onChange={handleInputChange}
                className={styles.textField}
                required
              />
            </label>
          </div>

          <div className={styles.resend}>
            <p>
              Didn't get a code?
              <span
                onClick={handleResetChange}
                style={{ cursor: "pointer", marginLeft: "5px" }}
              >
                Resend
              </span>
            </p>
          </div>
          <button className={styles.action}>Reset Password</button>
          <p>Back to Login</p>
        </form>
      </div>
    </>
  );
};
export default ForgetPassword;
