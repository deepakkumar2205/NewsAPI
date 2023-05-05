import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import API from '../../Url.js';
import { toast } from 'react-toastify'; 

const Signup = () => {  
  const navigate=useNavigate()


  const init={
    name:"",
    email:"",
    password:""
  }
  
  //yup validation
  const userValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3,"Enter a valid Name")
      .required("Email is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Pasword must have atleast 6 characters")
      .required("Password is required"),
  });

  const { values, handleChange, errors, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: init,
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        console.log(values);
        axios({
          url:`${API}/users/signup`,
          method:"post",
          data:values
        })
        .then((data)=>{
          console.log(data)
          if(data.status ===200){
            toast.success('Signup Successfull', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
              navigate('/login')
          }
          
        })
        .catch((err)=>{
          console.log(err.response.status)
          if(err.response.status===400){
            toast.error('User Already Exist', {
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
      }
    })


  return (
    <Paper
      className="d-flex flex-column p-3"
      style={{ width: "500px", border: "0px solid black" }}
      elevation={5}
    >
      {/* <br />   */}
      <h1>Sign up</h1>
      <hr />
     <form onSubmit={handleSubmit}>
     <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        name='name'
        type="text"
        fullWidth
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={errors.name && touched.name && errors.name}
        error ={errors.name && touched.name}
      />
      <br />
      <br />
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

      <Button type="submit">Signup</Button>
      </div>
     </form>
     <NavLink to='/login'>Login Page?</NavLink>
    </Paper>
  );
};

export default Signup;
