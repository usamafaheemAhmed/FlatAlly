import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultApiUrl, FlatState, LoggedInUserData, LoggedInUserTokenJwt, PreferenceState } from '../../Atom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ProfileHead from "../../assets/images/ProfileHead.jpg"
import { FormikInput } from '../../assets/inputs/CustomDynamicInputs';
import { Form, Formik } from 'formik';
import ProfileMenu from '../navigation/ProfileMenu';
import Profile from '../Forms/Profile';
import Notification from '../Notification/Notification';
import Preferences from '../Forms/Preferences';
import Flat from '../Forms/Flat';
import axios from 'axios';
import { openNotificationSuccess } from '../../assets/Alert/Alert';

const DashBoard = () => {

    let [userData, setUserData] = useRecoilState(LoggedInUserData);
    let [PreferenceObj, setPreferenceObj] = useRecoilState(PreferenceState);
    let [FlatStateObj, setFlatStateObj] = useRecoilState(FlatState);

    let [welcomeFlag, setWelcomeFlag] = useState(true);
    let Nav = useNavigate();
    let defaultApi = useRecoilValue(defaultApiUrl);

    useEffect(() => {
        const storedToken = localStorage.getItem("LoginToken");

        if (!storedToken) {
            localStorage.clear();
            Nav("/auth/Login");
        }
        else {
            if (welcomeFlag) {
                GetUserData(storedToken)
            }
        }
    }, []);

    let GetUserData = async (Token) => {
        axios.get(defaultApi + "/api/Profile", {
            headers: {
                'Authorization': `Bearer ${JSON.parse(Token).accessToken}`,
                'Content-Type': 'application/json' // Optional, specify if you are sending JSON data
            }
        }).then((res) => {
            console.log(res.data);
            setUserData(res.data.UserData)
            setPreferenceObj(res.data.PreferencesModelData)
            setFlatStateObj(res.data.FlatData)
            setWelcomeFlag(false);
            // navigate("/Search");
            let type = "success";
            let placement = "topRight"
            let message = "Welcome!" + res.data.UserData.userName + "."
            let description = "this is your DashBoard"
            openNotificationSuccess(type, placement, message, description)
        })
            .catch((err) => {
                console.log(err);
                console.error(err.response);
                if (err.response.status >= 400 || err.response.status <= 500) {
                    // Handle 400 error here
                    let type = "Error";
                    let placement = "topRight"
                    let message = "Error"
                    let description = "Some thing gone wrong Please! try again later"
                    openNotificationSuccess(type, placement, message, description)
                }
            });
    }

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
                        <Route path="/Flat" element={<Flat />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
