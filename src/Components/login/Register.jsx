import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, ConfigProvider, Spin, Steps } from 'antd';

import sampleImage from "../../assets/Svgs/Connected world-pana.svg";
import sampleImage2 from "../../assets/Svgs/Conversation-pana.svg";

import FarmSVG from "../../assets/Svgs/Remote team-pana.svg"
import { Form, Image, InputGroup } from 'react-bootstrap';
import { useRecoilState, useRecoilValue } from 'recoil';

import { FiEye, FiEyeOff } from "react-icons/fi";
import { defaultApiUrl, LoggedInUserData, PoultryFarmState } from '../../Atom';

const Register = () => {
    var navigate = useNavigate();

    let [loggedUser, setLoggedUser] = useRecoilState(LoggedInUserData)
    let [poultryFarm, setPoultryFarm] = useRecoilState(PoultryFarmState);

    let defaultApi = useRecoilValue(defaultApiUrl);

    let [proceed, setProceed] = useState(false)
    let [passwordSwitch, setPasswordSwitch] = useState(false)
    let [confirmPasswordSwitch, setConfirmPasswordSwitch] = useState(false)
    let [load, setLoad] = useState(false)
    let [userCreatedFlag, setUserCreatedFlag] = useState(true)
    const [previewImage, setPreviewImage] = useState(null); // State for preview image


    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const formik = useFormik({
        initialValues: {
            "id": 1,
            "userName": "",
            "password": "",
            "CPassword": "",
            "email": "",
            "phoneNumber": "",
            "CNIC": "",
            "address": "",
            "accountType": "Owner",
            "imageUrl": ""
        },



        onSubmit: (values, action) => {


            // console.log(values);

            let mydata = {
                email: values.email,
                password: values.password,
                userName: values.userName,
                phoneNumber: values.phoneNumber,
                CNIC: values.CNIC,
                address: values.address,
                accountType: values.accountType,
                imageUrl: values.imageUrl
            }

            console.log(mydata);

            setLoggedUser(mydata);
            setProceed(true);
            setCurrent(1);

        },

        validationSchema: Yup.object({

            password: Yup.string()
                .min(6, 'Password must be at least 6 characters long')
                .required('Password is required'),

            userName: Yup.string()
                .trim() // Remove leading/trailing whitespace
                .required('Username is required'),

            CPassword: Yup.string()
                .trim()
                .oneOf([Yup.ref('password')], 'Passwords must match') // Ensure confirm password matches password
                .required('Confirm password is required'),

            phoneNumber: Yup.string()
                .trim()
                .matches(/^03\d{9}$/, 'Enter  11 digit phone Number eg: 03XXXXXXXXX') // Validate phone number format (adjust as needed)
                .required('Phone number is required'),
        })
    })

    const formik2 = useFormik({
        initialValues: {
            "email": "",
            "CNIC": "",
            "address": "",
            "imageUrl": ""
        },

        onSubmit: async (values, action) => {
            // alert("Jinga");

            if (userCreatedFlag) {
                setLoad(true);

                let myData = {
                    email: values.email,
                    CNIC: values.CNIC,
                    address: values.address,
                    imageUrl: values.imageUrl,

                    // previous Object
                    accountType: loggedUser.accountType,
                    password: loggedUser.password,
                    phoneNumber: loggedUser.phoneNumber,
                    userName: loggedUser.userName,
                }

                console.log(JSON.stringify(myData));


                const formData = new FormData();

                // Add each key-value pair from myData to the FormData
                formData.append('email', values.email);
                formData.append('CNIC', values.CNIC);
                formData.append('address', values.address);

                // Handle imageUrl separately (assuming it's a file object)

                // Get the image file
                const imageFile = await getImageFile(sampleImage2);

                if (imageFile) {
                    // Add the image file to FormData
                    formData.append('imageUrl', imageFile);
                } else {
                    console.error('Image file is null');
                    return;
                }

                // Add remaining properties (optional, adjust as needed)
                formData.append('accountType', loggedUser.accountType);
                formData.append('password', loggedUser.password);
                formData.append('phoneNumber', loggedUser.phoneNumber);
                formData.append('userName', loggedUser.userName);



                axios.post(defaultApi + '/api/userRegistration/add', formData).then((req) => {
                    console.log(req.data);
                    // toast.success("User Registered Successfully", {
                    //     position: "top-center",
                    //     autoClose: 1000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    // });
                    setLoad(false);
                    setCurrent(current + 1);
                    setUserCreatedFlag(false);
                    setLoggedUser(req.data);

                    sessionStorage.setItem('UserData', JSON.stringify(req.data))
                    sessionStorage.setItem("loggedIn", true);
                    sessionStorage.setItem("UserName", loggedUser.userName);

                }).catch((error) => {
                    console.error(error.response);
                    if (error.response.status === 400) {
                        if (error.response.data === "User already exists.") {
                            // toast.error("You are already Registered try with other account...", {
                            //     position: "top-center",
                            //     autoClose: 1000,
                            //     hideProgressBar: false,
                            //     closeOnClick: true,
                            //     pauseOnHover: true,
                            //     draggable: true,
                            //     progress: undefined,
                            //     theme: "light",
                            // });
                        }
                        else {
                            console.log(error.response.data);
                        }
                        setLoad(false);

                    }
                })
            }
            else {
                setCurrent(current + 1);
                setLoad(false);
            }

        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email format')
                .required('Required'),
            CNIC: Yup.string()
                .trim()
                // .matches(/^\d{5}-\d{7}-\d{1}$/, 'Phone number must be numeric') // Validate phone number format (adjust as needed)
                .matches(/^\d{13}$/, 'Enter 13 digit CNIC number without dashes "-"') // Validate phone number format (adjust as needed)
                .required('CNIC number is required'),
            address: Yup.string()
                .required('Required'),
        })
    })

    // Assuming sampleImage2 is the path to the image file
    const getImageFile = async (imageUrl) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            return new File([blob], 'filename.png', { type: 'image/png' }); // Adjust the filename and type as needed
        } catch (error) {
            console.error('Error getting image file:', error);
            return null;
        }
    };


    const formik3 = useFormik({
        initialValues: {
            user_FK: "",
            name: "",
            // area: "",
            ownerShipStatus: "",
            rentAmount: "",
            address: "",
            chicksCapacity: "",
            numberOfSheds: "",
            branch: "1",
            phoneNumber: "",
            // email: ""
        },



        onSubmit: (values, action) => {

            let myData = {
                user_FK: loggedUser._id,
                name: values.name,
                // area: values.area,
                ownerShipStatus: values.ownerShipStatus,
                rentAmount: values.rentAmount,

                address: values.address,
                branch: values.branch,
                phoneNumber: values.phoneNumber,
                // email: values.email

                chicksCapacity: values.chicksCapacity,
                numberOfSheds: values.numberOfSheds,

            }

            console.log(JSON.stringify(myData));

            /* here we have to store User Data in Session and in recoilStates 
             to use them later also we need to run api for poultry Farm to created one instantly*/

            /* issue needed to handle in Backend api is just filtering on base on branch not Corresponding branch of user which
            will create issues later */
            axios.post(defaultApi + '/api/poultryFarm/Add', myData).then((res) => {
                console.log(res.data)

                // toast.success("User poultry farm is created", {
                //     position: "top-center",
                //     autoClose: 1000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                // });

                setPoultryFarm([res.data]);
                navigate("/")

            }).catch((err) => {
                console.log(err)
                console.error(err.response);
                if (err.response.status === 400) {
                    // toast.error("Something went wrong please try again later ... ", {
                    //     position: "top-center",
                    //     autoClose: 1000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "light",
                    // });
                }
            })

            // navigate("/")


        },

        validationSchema: Yup.object({

            address: Yup.string().required(),

            chicksCapacity: Yup.string().required("Chicks capacity is Required"),
            numberOfSheds: Yup.string().required("Number of Sheds is Required"),

            ownerShipStatus: Yup.string().required('Ownership status is required'),

            rentAmount: Yup.string()
                .when('ownerShipStatus', {
                    is: 'rented',
                    then: Yup.string().required('Rent amount is required for rented properties'),
                })
                .notRequired(), // Optional: Default required message

            name: Yup.string()
                .trim() // Remove leading/trailing whitespace
                .required('Poultry Farm Name  is required'),
            phoneNumber: Yup.string()
                .trim()
                .matches(/^03\d{9}$/, 'Enter  11 digit phone Number eg: 03XXXXXXXXX')// Validate phone number format (adjust as needed)
                .required('Phone number is required'),

        })
    })

    const [current, setCurrent] = useState(1);

    // Customize the theme here if needed
    const customTheme = {
        token: {
            colorPrimary: '#488a99', // Use the primary color from the theme or default to #488a99
        }
        // Add more theme customizations if needed
    };


    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        // Basic validation (optional)
        if (!selectedFile || !selectedFile.type.match('image/*')) {
            console.error('Invalid image file format. Please select an image');
            return;
        }

        formik2.setFieldValue('imageUrl', selectedFile); // Set the image file object
        setPreviewImage(URL.createObjectURL(selectedFile)); // Update preview image
    };


    return (
        <div className='container-fluid'>
            <div className='row justify-content-center align-items-center vh-100'>
                <div className='col-md-8'>
                    <Card className='shadow' data-aos="flip-left" data-aos-duration="800">
                        {!proceed &&
                            <div className="row align-items-stretch ">
                                <div className="col-md-6 order-2">
                                    <Image src={FarmSVG} alt='Farm SVG' fluid className='w-100' />
                                </div>
                                <div className="col-md-6 order-1">
                                    <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
                                        <form className='w-100' onSubmit={formik.handleSubmit}>
                                            <div className='row mt-2'>
                                                <div className='col-md-12 text-center'>
                                                    <h3><b>REGISTER</b></h3>
                                                </div>
                                            </div>

                                            <div className='row mt-2 justify-content-center'>
                                                <div className='col-md-10'>
                                                    <label htmlFor='userName'>Name</label>
                                                    <input autoComplete='off' className='form-control' type="string" id='userName' placeholder="Enter your name" name="userName"
                                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.userName} />
                                                    {formik.touched.userName && formik.errors.userName ? <div className='text-danger'>{formik.errors.userName}</div> : null}
                                                </div>
                                            </div>

                                            <div className='row mt-2 justify-content-center'>
                                                <div className='col-md-10'>
                                                    <label htmlFor='phoneNumber'>Phone</label>

                                                    <input autoComplete='off' className='form-control' type="string" id='phoneNumber' placeholder="03XXXXXXXXX" name="phoneNumber"
                                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} />
                                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : null}
                                                </div>
                                            </div>

                                            <div className='row mt-2'>
                                                <div className='col-md-1'></div>
                                                <div className='col-md-10'>
                                                    <label htmlFor='password'>Password</label>
                                                    <InputGroup>
                                                        <Form.Control className='form-control box-shadow-0 border-end-0' type={passwordSwitch ? "text" : "password"} id='password' placeholder="Password" name='password'
                                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                                        <InputGroup.Text className='bg-white border-start-0 curserPointer' onClick={() => setPasswordSwitch(!passwordSwitch)} > {passwordSwitch ? <FiEye /> : <FiEyeOff />}</InputGroup.Text>
                                                    </InputGroup>

                                                    {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
                                                </div>
                                                <div className='col-md-1'></div>
                                            </div>

                                            <div className='row mt-2'>
                                                <div className='col-md-1'></div>
                                                <div className='col-md-10'>
                                                    <label htmlFor='CPassword'>Confirm Password</label>
                                                    <InputGroup>
                                                        <Form.Control className='form-control box-shadow-0 border-end-0' type={confirmPasswordSwitch ? "text" : "password"} id='CPassword' placeholder="Confirm Password" name='CPassword'
                                                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.CPassword} />
                                                        <InputGroup.Text className='bg-white border-start-0 curserPointer' onClick={() => setConfirmPasswordSwitch(!confirmPasswordSwitch)} > {confirmPasswordSwitch ? <FiEye /> : <FiEyeOff />}</InputGroup.Text>
                                                    </InputGroup>

                                                    {formik.touched.CPassword && formik.errors.CPassword ? <div className='text-danger'>{formik.errors.CPassword}</div> : null}
                                                </div>
                                                <div className='col-md-1'></div>
                                            </div>

                                            <div className='row mt-3 mb-2 justify-content-center '>
                                                <div className='col-md-10'>
                                                    <p className='p-0 m-0'>I already have an Account <Link to='/auth/login' className='C-color'>Login</Link></p>
                                                </div>
                                            </div>

                                            <div className='row justify-content-center '>
                                                <div className='col-md-10'>
                                                    <button type='submit' className='primary btn w-100 '>Sign up</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>}

                        {proceed && <div className="row justify-content-center ">

                            <div className='col-md-10'>
                                <div className='row mt-2 mb-4'>
                                    <div className='col-md-12 text-center'>
                                        {current === 1 &&
                                            <h3><b>Your Address</b></h3>
                                        }
                                        {current === 2 &&
                                            <h3><b>Add Your Poultry Farm</b></h3>
                                        }

                                    </div>
                                </div>
                                <ConfigProvider theme={customTheme}>
                                    <Steps
                                        responsive={true}
                                        current={current}
                                        // onChange={onChange}
                                        items={[
                                            {
                                                title: 'Step 1',
                                                description: "Login",
                                            },
                                            {
                                                title: 'Step 2',
                                                description: "Your Address",
                                            },
                                            {
                                                title: 'Step 3',
                                                description: "Add Poultry Farm",
                                            },
                                        ]}
                                    />
                                </ConfigProvider>
                            </div>

                            {!load &&
                                <div className='col-md-10 mt-4'>

                                    {current === 1 &&
                                        <div className='row mt-2 justify-content-center align-items-start RegisterAddressBlock'>
                                            <div className='col-md-12 mb-3 d-none'>
                                                <div className='row justify-content-center'>
                                                    <div className='col-md-3 px-5 px-md-0'>
                                                        <label for="imageUrl" className='curserPointer px-5 px-md-0'  >
                                                            {previewImage ? (
                                                                <Image fluid src={previewImage} roundedCircle className='w-100 px-5 px-md-4 ' />
                                                            ) : (
                                                                <Image fluid src={sampleImage} roundedCircle className='w-100 px-5 px-md-4' /> // Fallback image
                                                            )}
                                                        </label>
                                                        <label for="imageUrl" className="text-center h5 w-100 fw-bold curserPointer">Profile Pic</label>
                                                        <input
                                                            autoComplete='off'
                                                            className='form-control d-none'
                                                            type="file"
                                                            id='imageUrl'
                                                            placeholder="file"
                                                            name="imageUrl"
                                                            onChange={handleImageChange}
                                                            onBlur={formik2.handleBlur} // Optional
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-md-6 '>
                                                <label htmlFor='email'>Email</label>
                                                <input autoComplete='off' className='form-control' type="string" id='email' placeholder="example@gmail.com" name="email"
                                                    onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.email} />
                                                {formik2.touched.email && formik2.errors.email ? <div className='text-danger'>{formik2.errors.email}</div> : null}
                                            </div>

                                            <div className='col-md-6 mt-2 mt-md-0'>
                                                <label htmlFor='CNIC'>CNIC</label>
                                                <input autoComplete='off' className='form-control' type="string" id='CNIC' placeholder="3520147812311" name="CNIC"
                                                    onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.CNIC} />
                                                {formik2.touched.CNIC && formik2.errors.CNIC ? <div className='text-danger'>{formik2.errors.CNIC}</div> : null}
                                            </div>

                                            <div className='col-md-12 mt-2'>
                                                <label htmlFor='address'>Address</label>
                                                <textarea rows="2" cols="3" autoComplete='off' className='form-control' type="string" id='address' placeholder="address" name="address"
                                                    onChange={formik2.handleChange} onBlur={formik2.handleBlur} value={formik2.values.address} />
                                                {formik2.touched.address && formik2.errors.address ? <div className='text-danger'>{formik2.errors.address}</div> : null}
                                            </div>
                                        </div>}

                                    {current === 2 &&
                                        <div className='row mb-4 justify-content-center'>
                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='name'>Name</label>
                                                <input autoComplete='off' className='form-control' type="string" id='name' placeholder="Usama's Farm" name="name"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.name} />
                                                {formik3.touched.name && formik3.errors.name ? <div className='text-danger'>{formik3.errors.name}</div> : null}
                                            </div>


                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='ownerShipStatus'>Status</label>
                                                <select autoComplete='off' className='form-select' type="string" id='ownerShipStatus' name="ownerShipStatus"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.ownerShipStatus} >
                                                    <option value={""}>Select</option>
                                                    <option value={"Owner"}>Owner</option>
                                                    <option value={"rented"}>Rented</option>
                                                </select>
                                                {formik3.touched.ownerShipStatus && formik3.errors.ownerShipStatus ? <div className='text-danger'>{formik3.errors.ownerShipStatus}</div> : null}
                                            </div>

                                            {formik3.values.ownerShipStatus === "rented" &&
                                                <div className='col-md-6 mt-2'>
                                                    <label htmlFor='rentAmount'>Rent Amount</label>
                                                    <input autoComplete='off' className='form-control' type="string" id='rentAmount' placeholder="Enter Amount" name="rentAmount"
                                                        onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.rentAmount} />
                                                    {formik3.touched.rentAmount && formik3.errors.rentAmount ? <div className='text-danger'>{formik3.errors.rentAmount}</div> : null}
                                                </div>

                                            }


                                            <div className={` ${formik3.values.ownerShipStatus === "rented" ? "col-md-6" : "col-md-12"}   mt-2`}>
                                                <label htmlFor='branchName'>Branch Name</label>

                                                <input autoComplete='off' className='form-control' type="string" id='branchName' placeholder="Enter Branch Name" name="branchName"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.branchName} />
                                                {formik3.touched.branchName && formik3.errors.branchName ? <div className='text-danger'>{formik3.errors.branchName}</div> : null}

                                            </div>

                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='chicksCapacity'>Chicken Capacity</label>
                                                <input autoComplete='off' className='form-control' type="number" id='chicksCapacity' placeholder="Chicken Capacity" name="chicksCapacity"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.chicksCapacity} />
                                                {formik3.touched.chicksCapacity && formik3.errors.chicksCapacity ? <div className='text-danger'>{formik3.errors.chicksCapacity}</div> : null}
                                            </div>

                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='numberOfSheds'>No of Sheds </label>
                                                <input autoComplete='off' className='form-control' type="number" id='numberOfSheds' placeholder="Enter numbers of Sheds" name="numberOfSheds"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.numberOfSheds} />
                                                {formik3.touched.numberOfSheds && formik3.errors.numberOfSheds ? <div className='text-danger'>{formik3.errors.numberOfSheds}</div> : null}
                                            </div>

                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='phoneNumber'>Phone</label>
                                                <input autoComplete='off' className='form-control' type="string" id='phoneNumber' placeholder="03XXXXXXXXX" name="phoneNumber"
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.phoneNumber} />
                                                {formik3.touched.phoneNumber && formik3.errors.phoneNumber ? <div className='text-danger'>{formik3.errors.phoneNumber}</div> : null}                                           </div>

                                            <div className='col-md-6 mt-2'>
                                                <label htmlFor='address'>Address</label>
                                                <textarea rows="1" cols="3" autoComplete='off' className='form-control' type="string" id='address' placeholder="address" name="address" style={{ height: "37px" }}
                                                    onChange={formik3.handleChange} onBlur={formik3.handleBlur} value={formik3.values.address} />
                                                {formik3.touched.address && formik3.errors.address ? <div className='text-danger'>{formik3.errors.address}</div> : null}
                                            </div>

                                        </div>
                                    }

                                    <div className='row justify-content-between'>
                                        <div className='col-md-2 mt-2'>
                                            <button type='submit' onClick={() => { setCurrent(current - 1); if (current === 1) { setProceed(false); } }} className='primary btn w-100'>Back</button>
                                        </div>

                                        <div className='col-md-2 mt-2'>
                                            {/**<button type='submit' onClick={() => { if (current === 1) { alert("Befor junga"); formik2.handleSubmit() } else { formik3.handleSubmit() } }} className='primary btnReverse w-100'>Next</button> */}
                                            <button
                                                type='submit'
                                                onClick={() => (current === 1 ? formik2.handleSubmit() : formik3.handleSubmit())}
                                                className='primary btn w-100'
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>

                                </div>}

                            {load && <div className='col-md-10 mt-4'>
                                <div className='row justify-content-center align-items-center' style={{ height: "20rem" }}>
                                    <ConfigProvider theme={customTheme}>
                                        <Spin tip="Registering user, please wait..." size="large">
                                            &nbsp;
                                        </Spin>
                                    </ConfigProvider>
                                </div>
                            </div>}

                        </div>}
                    </Card>
                </div>
            </div>
        </div>
    )


}

export default Register