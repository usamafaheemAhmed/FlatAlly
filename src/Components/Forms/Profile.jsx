import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { FormikInput, FormikSelect } from '../../assets/inputs/CustomDynamicInputs';
import { Image } from 'react-bootstrap';
import sampleImage2 from "../../assets/Svgs/profile-user-svgrepo-com.svg";
import * as Yup from 'yup';
import { defaultApiUrl, LoggedInUserData } from '../../Atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openNotificationSuccess, PatchAxios, PostAxios } from '../../assets/Alert/Alert';
import { content } from '../../assets/Content/Content';


const Profile = () => {

    const [EditState, setEditState] = useState(true); // State for preview image
    let userData = useRecoilValue(LoggedInUserData);
    let [userData1, setUserData] = useRecoilState(LoggedInUserData);
    let defaultApi = useRecoilValue(defaultApiUrl);

    let { acountType } = content;

    let initialValues = {
        userName: "Hannan",
        "email": "hannan@gmail.com",
        "phoneNumber": "+441122123133",
        "address": "Pakistan,Lahore,Ferozpur Road",
        "accountType": "Provider",
        "imageUrl": "",
        "gender": "Male",
        "area": "Capitalcity",
    }
    let onSubmit = async (values) => {

        let Obj = new FormData();

        Obj.append('userName', values.userName);
        Obj.append('email', values.email);
        Obj.append('phoneNumber', values.phoneNumber);
        Obj.append('address', values.address);
        Obj.append('accountType', values.accountType);

        const imageFile = values.imageUrl;

        if (imageFile) {
            Obj.append('imageUrl', imageFile);
        } else {
            message.error('You have not entered any images. Please upload at least one image.');
            console.error('Image file is null');
            return false;
        }

        Obj.append('gender', values.gender);
        Obj.append('area', values.area);

        if (!userData && Object.keys(userData).length <= 0 && !userData._id) {
            //Post
            // let res = await PostAxios(defaultApi + "/api/Register", Obj)
            // if (res) {

            //     let type = "success";
            //     let placement = "topRight"
            //     let message = "User Data Added"
            //     let description = "Please! check User Data Added"
            //     openNotificationSuccess(type, placement, message, description)
            // }
        }
        else {
            Obj.append("_id", userData._id)
            // Patch
            let res = await PatchAxios(defaultApi + "/api/Register/Update/" + userData._id, Obj)
            if (res) {
                res._id = userData._id;
                setUserData(res)

                let type = "success";
                let placement = "topRight"
                let message = "User Data Added"
                let description = "Please! check User Data Added"
                openNotificationSuccess(type, placement, message, description)
            }
        }
        setEditState(true)
        console.log(values);
    }
    let validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        address: Yup.string()
            .required('Required'),
        accountType: Yup.string()
            .required('Required'),
        gender: Yup.string()
            .required('Required'),
        area: Yup.string()
            .required('Required'),
        userName: Yup.string()
            .trim() // Remove leading/trailing whitespace
            .required('Username is required'),

        phoneNumber: Yup.string()
            .trim()
            .matches(/^\+44\d{2}\d{4}\d{4}$/, 'Enter  13 digit phone Number eg: +44XXXXXXXXXX ') // Validate phone number format (adjust as needed)
            .required('Phone number is required'),
    })
    const [previewImage, setPreviewImage] = useState(null); // State for preview image

    const handleImageChange = (event, setFieldValue) => {
        if (!EditState) {
            const selectedFile = event.target.files[0];
            // Basic validation (optional)
            if (!selectedFile || !selectedFile.type.match('image/*')) {
                console.error('Invalid image file format. Please select an image');
                return;
            }

            setFieldValue('imageUrl', selectedFile); // Set the image file object
            setPreviewImage(URL.createObjectURL(selectedFile)); // Update preview image
        }
    };

    let AllowEdit = (e) => {
        setEditState(!EditState)
    }

    function fillValues(setFieldValue) {
        if (userData && Object.keys(userData).length > 0) {
            setFieldValue("userName", userData.userName)
            setFieldValue("email", userData.email)
            setFieldValue("phoneNumber", userData.phoneNumber)
            setFieldValue("address", userData.address)
            setFieldValue("accountType", userData.accountType)
            // setFieldValue("imageUrl", userData.imageUrl)
            setFieldValue("gender", userData.gender)
            setFieldValue("area", userData.area_FK.areaName)
            // alert("fillValues")

            let Data = userData.imageUrl.replace('\\', '/');
            console.log(Data)
            setFieldValue("imageUrl", Data)
            setPreviewImage(defaultApi + "/" + Data);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values, setFieldValue, handleBlur }) => {
                useEffect(() => {
                    fillValues(setFieldValue)
                }, [userData])
                return (
                    <Form >
                        <div className='row'>
                            <h5 className='mb-3' onClick={() => { console.log(userData, previewImage) }}>Profile Data
                                {EditState ?
                                    <span role='button' className='float-end btn btn-secondary'
                                        onClick={AllowEdit}> Edit Profile</span>
                                    :
                                    <button type='Submit' className='float-end btn btn-secondary'>
                                        Update Profile
                                    </button>} </h5>
                            <div className='col-md-4'>
                                <div className='row justify-content-center'>
                                    <label for="imageUrl" disabled role='button' className='curserPointer text-center px-5 mt-2 px-md-0'  >
                                        {previewImage ? (
                                            <Image fluid src={previewImage} roundedCircle className='ProfileImgSize' />
                                        ) : (
                                            <Image fluid src={sampleImage2} roundedCircle className='ProfileImgSize' /> // Fallback image
                                        )}
                                    </label>
                                    <div className='col-md-12 px-5 px-md-0'>
                                        <label disabled for="imageUrl" role='button' className="text-center h5 w-100 fw-bold curserPointer  mt-3">Profile Pic</label>
                                        <input
                                            autoComplete='off'
                                            className='form-control d-none'
                                            type="file"
                                            id='imageUrl'
                                            placeholder="file"
                                            name="imageUrl"
                                            onChange={(e) => handleImageChange(e, setFieldValue)}
                                            onBlur={handleBlur} // Optional
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <FormikInput
                                            name="userName"
                                            placeholder="User Name"
                                            variant="borderless"
                                            label="User Name"
                                            type="text"
                                            value={values.userName}
                                            setFieldValue={setFieldValue}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikInput
                                            name="email"
                                            placeholder="email"
                                            variant="borderless"
                                            label="Email"
                                            type="Email"

                                            disabled={EditState}

                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikInput
                                            name="phoneNumber"
                                            placeholder="phoneNumber"
                                            variant="borderless"
                                            label="Phone Number"
                                            type="text"
                                            values={values}
                                            setFieldValue={setFieldValue}
                                            disabled={EditState}

                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikInput
                                            name="address"
                                            placeholder="Address"
                                            variant="borderless"
                                            label="Address"
                                            type="text"
                                            values={values}
                                            setFieldValue={setFieldValue}
                                            disabled={EditState}

                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikSelect
                                            name="accountType"
                                            label="Account Type"
                                            options={acountType}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikSelect
                                            name="gender"
                                            label="Gender"
                                            options={[{ value: "male", label: 'Male' },
                                            { value: "Female", label: 'Female' },
                                            { value: "other", label: 'Other' },]}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <FormikInput
                                            name="area"
                                            placeholder="Area"
                                            variant="borderless"
                                            label="Area"
                                            type="text"
                                            values={values}
                                            setFieldValue={setFieldValue}
                                            disabled={EditState}

                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Form>
                )
            }
            }
        </Formik>
    )
}

export default Profile
