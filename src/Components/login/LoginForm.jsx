import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import InternetSVG from "../../assets/Svgs/Connected world-pana.svg"

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card } from 'antd';



import { Image } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultApiUrl, LoggedInUserData } from '../../Atom';
import LoginSVG from './LoginSVG';

const LoginForm = () => {
  var navigate = useNavigate();
  let defaultApi = useRecoilValue(defaultApiUrl);
  let [loggedUser, setLoggedUser] = useRecoilState(LoggedInUserData);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const formik = useFormik({

    initialValues: {

      email: "",
      password: "",

    },

    onSubmit: (values, action) => {

      let mydata = {
        email: values.email,
        password: values.password,
      }

      axios
        .post(defaultApi + "/api/userRegistration/login", mydata)
        .then((res) => {


          if (res.status === 200) {
            console.log(res.data.user);

            setLoggedUser(res.data.user);

            // toast.success("login successfully", {
            //   position: "top-center",
            //   autoClose: 1000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });

            action.resetForm();


            sessionStorage.setItem('UserData', JSON.stringify(res.data.user))

            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("UserName", res.data.user.userName);
            navigate("/")

          }
        }
        )
        .catch((error) => {
          if (error.response.status === 400) {
            console.log("error log", error.response);
            // toast.error(error.response.data, {
            //   position: "top-center",
            //   autoClose: 1500,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: false,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            // });
          }
        });
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
      password: Yup.string().min(6).required('Please enter your password')
    })
  })

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-8'>
          <Card className='shadow' data-aos="flip-left" data-aos-duration="800">
            <div className="row align-items-stretch">
              <div className="col-md-6">
                <Image src={InternetSVG} alt='Loginimg' fluid />
                {/**
                  <LoginSVG />
                  */}

              </div>
              <div className="col-md-6">
                <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
                  <form className='w-100' onSubmit={formik.handleSubmit}>
                    <div className='row mt-4'>
                      <div className='col-md-12 text-center'>
                        <h3><b>LOGIN</b></h3>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-1'></div>
                      <div className='col-md-10'>
                        <label htmlFor='email'>Email</label>
                        <input autoComplete='off' className='form-control' type="email" id='email' placeholder="someone@example.com" name="email"
                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
                      </div>
                      <div className='col-md-1'></div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-1'></div>
                      <div className='col-md-10'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type="password" id='password' placeholder="Password" name='password'
                          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
                      </div>
                      <div className='col-md-1'></div>
                    </div>

                    <div className='row my-2 justify-content-center '>
                      <div className='col-md-10'>
                        <p>I don't have Account <Link to='/auth/Register' className='C-color'>Register</Link></p>
                      </div>
                    </div>

                    <div className='row justify-content-center '>
                      <div className='col-md-10'>
                        <button type='submit' className='primary btn w-100 '>Login</button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )


}

export default LoginForm