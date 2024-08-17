import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil';
import { LoggedInUserTokenJwt } from '../../Atom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ProfileHead from "../../assets/images/ProfileHead.jpg"
import { FormikInput } from '../../assets/inputs/CustomDynamicInputs';
import { Form, Formik } from 'formik';
import ProfileMenu from '../navigation/ProfileMenu';
import Profile from '../Forms/Profile';
import Notification from '../Notification/Notification';
import Preferences from '../Forms/Preferences';

const DashBoard = () => {

    let loggedUserJWT = useRecoilValue(LoggedInUserTokenJwt);
    let Nav = useNavigate();

    // useEffect(() => {
    //     if (loggedUserJWT && Object.keys(loggedUserJWT).length <= 0) {
    //         // loggedUser is not an empty object
    //         localStorage.clear();

    //         Nav("/")
    //     }
    // }, []);

    return (
        <div className="container-fluid">
            <div className='row border'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25'>
                            <h1>DashBoard UserProfile</h1>
                            <p className='text-center'>Online Portal where you can find your Perfect room Partner</p>
                        </div>
                        <div>
                            <Image src={ProfileHead} fluid alt='Travel Image' />
                        </div>
                    </div>
                </div>
            </div>


            <div className='row justify-content-center my-5'>
                <div className='col-md-10 p-0'>
                    <h2>Welcome, to your DashBoard</h2>
                    <br />
                    <ProfileMenu />
                    <br />
                    <Routes>
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Preferences" element={<Preferences />} />
                        <Route path="/notification" element={<Notification />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
