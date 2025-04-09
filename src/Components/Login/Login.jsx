import React, { useState } from 'react'
import './Login.css'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function Login() {

 const navigate = useNavigate() 
 
 const initialValues = {
   email: "",
   password: "",
 };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = existingUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        // User is authenticated, set isAuthenticated flag in localStorage
        localStorage.setItem("isAuthenticated", true);
        toast.success("Login successful!");
        navigate("/"); // Navigate to home page or dashboard
      } else {
        toast.error("Invalid email or password!");
      }
    },
  });



  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <section className="login my-4 py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fw-bold mt-5 text-decoration-underline">Login</h1>

              <form
                className="login-container"
                onSubmit={loginForm.handleSubmit}
              >
                <div className="login-form mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                  />
                   {loginForm.touched.email && loginForm.errors.email && (
                    <div className="text-danger">{loginForm.errors.email}</div>
                  )}

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                  />
                    {loginForm.touched.password && loginForm.errors.password && (
                    <div className="text-danger">{loginForm.errors.password}</div>
                  )}
                  <button type="submit" className="login-btn d-block mx-auto">
                    Login
                  </button>
                  <p className="end-line text-white mt-2">
                    Don't have an account?{" "}
                    <Link to={"/signup"}> Create an account</Link>
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
