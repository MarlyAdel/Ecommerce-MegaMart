import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

export default function Signup() {

 const navigate = useNavigate()

 const initialValues = {
   userName: "",
   email: "",
   password: "",
   file: null,
 };

 const validationSchema = Yup.object({
    userName: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    file: Yup.mixed().required('File is required'),
  });

  const signUpForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the email already exists
      const userExists = existingUsers.find(
        (user) => user.email === values.email
      );

      if (userExists) {
        toast.error("Account already exists!");
      } else {
        // If not, add the new user to local storage
        existingUsers.push({
          userName: values.userName,
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("users", JSON.stringify(existingUsers));

        // Delay navigation to allow toast to show
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after the toast
        }, 2000); // Delay for 2 seconds (you can adjust this delay)
      }
    },
  });


    

  return (
    <div>
      <Helmet>
        <title>Signup</title>
      </Helmet>

      <section className="login my-4 py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ToastContainer position="top-center" autoClose={3000} />
              <h1 className="fw-bold mt-5 text-decoration-underline">Signup</h1>

              <form
                className="login-container"
                onSubmit={signUpForm.handleSubmit}
              >
                <div className="login-form mt-4">
                  <input
                    type="text"
                    placeholder="UserName"
                    name="userName"
                    onBlur={signUpForm.handleBlur}
                    value={signUpForm.values.userName}
                    onChange={signUpForm.handleChange}
                  />
                  {signUpForm.touched.userName &&
                    signUpForm.errors.userName && (
                      <div className="text-danger">
                        {signUpForm.errors.userName}
                      </div>
                    )}
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    onBlur={signUpForm.handleBlur}
                    value={signUpForm.values.email}
                    onChange={signUpForm.handleChange}
                  />
                  {signUpForm.touched.email && signUpForm.errors.email && (
                    <div className="text-danger">{signUpForm.errors.email}</div>
                  )}
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    name="password"
                    onBlur={signUpForm.handleBlur}
                    value={signUpForm.values.password}
                    onChange={signUpForm.handleChange}
                  />
                  {signUpForm.touched.password &&
                    signUpForm.errors.password && (
                      <div className="text-danger">
                        {signUpForm.errors.password}
                      </div>
                    )}
                  <input
                    type="file"
                    name="file"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                       if (file) {
                          signUpForm.setFieldValue("file", file.name); // just store the name
                          localStorage.setItem("currentUserImage", `/uploads/${file.name}`); // store full path
                        }
                    }}
                    onBlur={signUpForm.handleBlur}
                  />
                  {signUpForm.touched.file && signUpForm.errors.file && (
                    <div className="text-danger">{signUpForm.errors.file}</div>
                  )}
                  <button type="submit" className="login-btn d-block mx-auto">
                    Create an account
                  </button>
                  <p className="text-white mt-2">
                    Already have an account? <Link to={"/login"}> Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
