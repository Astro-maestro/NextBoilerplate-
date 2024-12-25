import React, { useState } from "react";
import styles from "@/styles/Login.module.css";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { FieldValues, useForm } from "react-hook-form";
import { LoginRequest } from "@/typeScript/auth.interface";
import { loginMutation } from "@/customHooks/auth.query.hooks";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean | null>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();
  const { mutate, isPending } = loginMutation();
  const onSubmit = async (formData: FieldValues) => {
    const { email, password } = formData as { email: string; password: string };
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    mutate(formData,{
      onSuccess:()=>{
      }
    });
    console.log(formData);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={styles.loginFormWrapper}>
        <div className={styles.borderRadiusComponent1}>&nbsp;</div>
        <div className={styles.borderRadiusComponent2}>&nbsp;</div>
        <form style={{ zIndex: "2" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.loginFormWrapperChild}
            style={{ backgroundColor: "white" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  margin: "1rem 0rem",
                }}
                color="#1976d2"
              >
                Login
              </Typography>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Email
              </Typography>

              <TextField
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
                fullWidth
                id="outlined-basic"
                margin="normal"
                variant="outlined"
                type="email"
                placeholder="Enter email"
                sx={{ width: "100%" }}
                // error={!!errors.email}
                // helperText={errors.email && errors.email.message}
              />
              <span style={{ color: "red" }}>
                {errors.email && `*${errors.email.message}`}
              </span>
            </div>

            <div>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Password
              </Typography>
              <TextField
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                    message: "Invalid password format",
                  },
                })}
                fullWidth
                id="outlined-basic"
                margin="normal"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                sx={{ width: "100%" }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? (
                            <FaRegEye color="#000" />
                          ) : (
                            <FaRegEyeSlash color="#000" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                // error={!!errors.email}
                // helperText={errors.email && errors.email.message}
              />
              <span style={{ color: "red" }}>
                {errors.password && `*${errors.password.message}`}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem 0rem",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "8rem",
                  borderRadius: "2rem",
                  backgroundColor: "#026EF8",
                  ":disabled": {
                    backgroundColor: "#afd3ff",
                  },
                }}
                disabled={isPending}
                onClick={handleSubmit(onSubmit)}
              >
                {isPending ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  "Login"
                )}
              </Button>
              <Link href="/auth/updatePassword">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    marginTop: "10px",
                    color: "#0270F7",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password
                </Typography>
              </Link>
            </div>
            <div
              style={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Don't have an account?
              </Typography>
              <Link href="/auth/register">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#0270F7",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Typography>
              </Link>
            </div>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default Login;
