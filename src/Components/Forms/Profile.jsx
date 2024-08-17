import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { FormikInput } from '../../assets/inputs/CustomDynamicInputs';
import { Image } from 'react-bootstrap';
import sampleImage2 from "../../assets/Svgs/profile-user-svgrepo-com.svg";
import * as Yup from 'yup';


const Profile = () => {

    const [EditState, setEditState] = useState(true); // State for preview image


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
    let onSubmit = (values) => {
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

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values, setFieldValue, handleBlur }) => (
                <Form>
                    <div className='row'>
                        <h5 className='mb-3'>Profile Data
                            {EditState ?
                                <span role='button' className='float-end btn btn-secondary'
                                    onClick={AllowEdit}> Edit Profile</span>
                                :
                                <button type='Submit' className='float-end btn btn-secondary'>
                                    Update Profile
                                </button>} </h5>
                        <div className='col-md-4'>
                            <div className='row justify-content-center'>
                                <label for="imageUrl" role='button' className='curserPointer text-center px-5 mt-2 px-md-0'  >
                                    {previewImage ? (
                                        <Image fluid src={previewImage} roundedCircle className='ProfileImgSize' />
                                    ) : (
                                        <Image fluid src={sampleImage2} roundedCircle className='ProfileImgSize' /> // Fallback image
                                    )}
                                </label>
                                <div className='col-md-12 px-5 px-md-0'>
                                    <label for="imageUrl" role='button' className="text-center h5 w-100 fw-bold curserPointer  mt-3">Profile Pic</label>
                                    <input
                                        autoComplete='off'
                                        className='form-control d-none'
                                        type="file"
                                        id='imageUrl'
                                        placeholder="file"
                                        name="imageUrl"
                                        onChange={(e) => handleImageChange(e, setFieldValue)}
                                        onBlur={handleBlur} // Optional
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
                                    <FormikInput
                                        name="accountType"
                                        placeholder="Account Type"
                                        variant="borderless"
                                        label="Account Type"
                                        type="text"
                                        values={values}
                                        setFieldValue={setFieldValue}
                                        disabled={EditState}

                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="gender"
                                        placeholder="Gender"
                                        variant="borderless"
                                        label="Gender"
                                        type="text"
                                        values={values}
                                        setFieldValue={setFieldValue}
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
            )}
        </Formik>
    )
}

export default Profile
