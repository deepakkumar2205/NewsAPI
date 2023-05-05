import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import API from '../../Url.js';
import { toast } from 'react-toastify'; 

const Login = () => {
  const init = {
    email: "",
    password: "",
  };

  //yup validation
  const userValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Pasword must have atleast 6 characters")
      .required("Password is required"),
  });
  const navigate= useNavigate();
  const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: init,
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        axios({
          url: `${API}/users/login`,
          method: "post",
          data: values,
        })
          .then((data) => {
            localStorage.setItem("x-Auth-token",data.data.token)
            navigate("/")
            if (data.status === 200) {
              toast.success("Signup Successfull", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              toast.error("Invalid Credentials", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          });
      },
    });
  return (
    <Paper
      className="d-flex flex-column p-3"
      style={{ width: "500px", border: "0px solid black" }}
      elevation={5}
    >
      {/* <br />   */}
      <h1>Login Page</h1>
      <hr />
      <form onSubmit={handleSubmit}>
      <TextField 
        id="outlined-basic"
        label="E-mail"
        variant="outlined" 
        name='email'
        fullWidth
        type="email"
        value={values.email}
        onChange={handleChange}
        helperText={errors.email && touched.email && errors.email}
        onBlur={handleBlur}
        error ={errors.email && touched.email}
        
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined" 
        name='password'
        type="text"
        fullWidth
        helperText={errors.password && touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error ={errors.password && touched.password}
      />
      <br />
      <br />
      <div className="w-100 d-flex justify-content-center">

      <Button type="submit">Login</Button>
      </div>
     </form>
      <NavLink to="/signup">Signup Page?</NavLink>
    </Paper>
  );
};

export default Login;
