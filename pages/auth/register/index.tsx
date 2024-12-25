import React, { use, useEffect, useState } from "react";
import styles from "@/styles/Register.module.css";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { RegisterRequest } from "@/typeScript/auth.interface";
import { registerMutation } from "@/customHooks/auth.query.hooks";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Register: React.FC = () => {
  const [image, setImage] = useState<File | null>();
  const [showPassword, setShowPassword] = useState<boolean | null>(false);
  const { mutate, isPending, data } = registerMutation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();

  const onSubmit = async (formData: RegisterRequest) => {
    const { first_name, last_name, email, password } = formData as {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
    };
    const formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    formdata.append("password", password);
    if (image) {
      formdata.append("profile_pic", image);
    }
    mutate(formdata);
    console.log(formdata);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={styles.registerFormWrapper}>
        <div className={styles.borderRadiusComponent1}>&nbsp;</div>
        <div className={styles.borderRadiusComponent2}>&nbsp;</div>
        <form style={{ zIndex: "2" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.registerFormWrapperChild}
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
                Sign Up
              </Typography>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                First Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter First Name"
                sx={{ width: "100%", mb: "6px" }}
                {...register("first_name", {
                  required: "First Name is required",
                  minLength: {
                    value: 3,
                    message: "First Name must be at least 3 characters long",
                  },
                })}
              />
              <span style={{ color: "red" }}>
                {errors.first_name && `*${errors.first_name?.message}`}
              </span>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Last Name
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Last Name"
                sx={{ width: "100%", mb: "6px" }}
                {...register("last_name", {
                  required: "Last Name is required",
                  minLength: {
                    value: 3,
                    message: "Last Name must be at least 3 characters long",
                  },
                })}
              />
              <span style={{ color: "red" }}>
                {errors.last_name && `*${errors.last_name?.message}`}
              </span>
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
                id="outlined-basic"
                variant="outlined"
                type="email"
                placeholder="Enter email"
                sx={{ width: "100%", mb: "6px" }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <span style={{ color: "red" }}>
                {errors.email && `*${errors.email?.message}`}
              </span>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Password
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                sx={{ width: "100%", marginBottom: "5px" }}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                    message: "Invalid password format",
                  },
                })}
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
              />
              <span style={{ color: "red" }}>
                {errors.password && `*${errors.password?.message}`}
              </span>
            </div>
            <div>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                }}
              >
                Profile Pic
              </Typography>
              <TextField
                {...register("profile_pic", {
                  required: "profile_pic is required",
                })}
                type="file"
                variant="outlined"
                color="secondary"
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setImage(target.files?.[0] || null);
                }}
                error={!!errors.profile_pic}
                helperText={errors.profile_pic && errors.profile_pic.message}
                fullWidth
                sx={{ backgroundColor: "white", borderRadius: "5px", mb: 4 }}
              />
              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                style={{
                  display: `${image ? "flex" : "none"}`,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  gap: "1rem",
                }}
              >
                <img
                  src={image ? URL.createObjectURL(image) : undefined}
                  alt="preview"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "1rem",
                  }}
                />
                {image && (
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Selected file: {image.name}
                  </Typography>
                )}
              </Stack>

              <span style={{ color: "red" }}>
                {errors.profile_pic && `*${errors.profile_pic?.message}`}
              </span>
            </div>
            {/* <div>
              {
                !errors.photo&&
                <img src={URL.createObjectURL(photo)} alt="preview" style={{width:"100px",height:"100px"}}/>
              }
            </div> */}
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
                onClick={handleSubmit(onSubmit)}
                sx={{
                  width: "8rem",
                  borderRadius: "2rem",
                  backgroundColor: "#026EF8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":disabled": {
                    backgroundColor: "#afd3ff",
                  },
                }}
                disabled={isPending}
              >
                {isPending ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Register"
                )}
              </Button>
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
              <Link href="/auth/login">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    color: "#0270F7",
                    cursor: "pointer",
                  }}
                >
                  Login
                </Typography>
              </Link>
            </div>
          </motion.div>
        </form>
      </div>
    </>
  );
};

export default Register;
