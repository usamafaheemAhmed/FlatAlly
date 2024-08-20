import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { FormikInput, FormikSelect, FormikSmokingPreferences } from '../../assets/inputs/CustomDynamicInputs';
import { Image } from 'react-bootstrap';
import sampleImage2 from "../../assets/Svgs/profile-user-svgrepo-com.svg";
import * as Yup from 'yup';
import { content } from '../../assets/Content/Content';
import { Upload } from 'antd';
import { BiPlus } from 'react-icons/bi';

import { message } from 'antd';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { defaultApiUrl, FlatState, LoggedInUserTokenJwt } from '../../Atom';
import { openNotificationSuccess } from '../../assets/Alert/Alert';

const Flat = () => {

    let { selectOptionCount6, bedList2 } = content

    let loggedUserToken = useRecoilValue(LoggedInUserTokenJwt)
    let defaultApi = useRecoilValue(defaultApiUrl);
    let [FlatStateObj, setFlatStateObj] = useRecoilState(FlatState);

    const [EditState, setEditState] = useState(true); // State for preview image


    let initialValues = {
        numberRoom: 1, // Convert to number
        washRoom: 1, // Convert to number
        kitchen: true, // Convert to boolean
        bedRoom: 1, // Convert to number
        bedType: "Single",
        imageUrl: [],
        Floor: 1, // Convert to number
    }

    let onSubmit = (values) => {
        console.log(values);
        const formData = new FormData();

        // Add each key-value pair from form values to FormData
        formData.append('numberRoom', values.numberRoom);
        formData.append('washRoom', values.washRoom);
        formData.append('kitchen', values.kitchen);
        formData.append('bedRoom', values.bedRoom);
        formData.append('bedType', values.bedType);
        formData.append('Floor', values.Floor);

        // Handle multiple images
        if (values.imageUrl && values.imageUrl.length > 0) {
            values.imageUrl.forEach((file) => {
                formData.append('imageUrl', file.originFileObj); // Append each file individually
            });
        } else {
            message.error('You have not entered any images. Please upload at least one image.');
            return false;
        }

        axios.post(defaultApi + '/api/Flat/Add', formData, {
            headers: {
                'Authorization': `Bearer ${loggedUserToken.accessToken}`,
                'Content-Type': 'multipart/form-data' // Important for file uploads
            }
        })
            .then((res) => {
                console.log(res.data);
                setFlatStateObj(res.data);
                // navigate("/Search");
                let type = "success";
                let placement = "topRight"
                let message = "Flat Added Success Fully"
                let description = "Please! check you Flat Details"
                openNotificationSuccess(type, placement, message, description)
            })
            .catch((err) => {
                console.log(err);
                console.error(err.response);
                if (err.response.status === 400) {
                    // Handle 400 error here
                    let type = "Error";
                    let placement = "topRight"
                    let message = "Error"
                    let description = "Some thing gone wrong Please! try again later"
                    openNotificationSuccess(type, placement, message, description)
                }
            });
    }

    let validationSchema = Yup.object({
        numberRoom: Yup.number().required('Required'),
        washRoom: Yup.number().required('Required'),
        kitchen: Yup.bool().required('Required'),
        bedRoom: Yup.number().required('Required'),
        bedType: Yup.string().required('Required'),
        Floor: Yup.number().required('Required'),
    })

    const [previewImage, setPreviewImages] = useState(null); // State for preview image

    const handleImageChange = (info, setFieldValue) => {
        let validFiles = true;

        // Filter and validate files
        const filteredFiles = info.fileList.slice(0, 5).filter((file) => {
            const isLt900KB = file.size / 1024 < 900;
            if (!isLt900KB) {
                message.error(`${file.name} is larger than 900KB.`);
                validFiles = false;
            }
            return isLt900KB;
        });

        if (!validFiles) return;

        setFieldValue('imageUrl', filteredFiles);

        // Notify the user if they only uploaded one image
        if (filteredFiles.length === 1) {
            message.info('You have uploaded only one image. You can add more.');
        }
    };

    let AllowEdit = (e) => {
        setEditState(!EditState)
    }

    function fillValues(setFieldValue) {
        if (FlatStateObj && Object.keys(FlatStateObj).length > 0) {
            setFieldValue("numberRoom", FlatStateObj.numberRoom);
            setFieldValue("washRoom", FlatStateObj.washRoom);
            setFieldValue("kitchen", FlatStateObj.kitchen);
            setFieldValue("bedRoom", FlatStateObj.bedRoom);
            setFieldValue("bedType", FlatStateObj.bedType);
            setFieldValue("Floor", FlatStateObj.Floor);

            // Handling imageUrl field
            console.log(FlatStateObj)
            if (FlatStateObj.imgs_Url && FlatStateObj.imgs_Url.length > 0) {
                console.log("Object image Store Start");

                const imageUrls = FlatStateObj.imgs_Url.map(url => ({
                    uid: url,
                    name: url.split('/').pop(),
                    status: 'done',
                    url: `${defaultApi}/${url.replace('\\', '/')}`
                }));

                console.log("Formatted Image URLs:", imageUrls); // Debugging line
                setFieldValue("imageUrl", imageUrls);
            }
        }
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {({ handleSubmit, values, setFieldValue, handleBlur }) => {
                useEffect(() => {
                    fillValues(setFieldValue)
                }, [FlatStateObj])
                return (
                    <Form>
                        <div className='row'>
                            <h5 className='mb-3' onClick={() => { console.log(FlatStateObj) }}>Your Flat Details
                                {EditState ?
                                    <span role='button' className='float-end btn btn-secondary'
                                        onClick={AllowEdit}> Edit Details</span>
                                    :
                                    <button type='Submit' className='float-end btn btn-secondary'>
                                        Update Details
                                    </button>} </h5>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="numberRoom"
                                            label="Number of Room"
                                            options={selectOptionCount6}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="washRoom"
                                            label="Number of wash Room"
                                            options={selectOptionCount6}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSmokingPreferences
                                            name="kitchen"
                                            disabled={EditState}
                                            label="Shared Kitchen"
                                            option={{
                                                First: "Yes",
                                                Second: "No",
                                            }}
                                            extra={{
                                                mainHead: "",
                                                innerHead: ""
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="bedRoom"
                                            label="Number of Bed Room"
                                            options={selectOptionCount6}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="bedType"
                                            label="Bed Type in Room"
                                            options={bedList2}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Floor"
                                            label="Number of floors"
                                            options={selectOptionCount6}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-12 mb-2'>
                                        <div className='row justify-content-center'>
                                            <div className="col-md-12 px-5 px-md-0">
                                                <label htmlFor="imageUrl" role="button" className="text-center h5 w-100 fw-bold cursorPointer mt-3">Flat Pics</label>
                                            </div>
                                            <Upload
                                                listType="picture-card"
                                                fileList={values.imageUrl}
                                                onChange={(e) => handleImageChange(e, setFieldValue)}
                                                onPreview={(file) => {
                                                    const src = file.url || URL.createObjectURL(file.originFileObj);
                                                    const img = new Image();
                                                    img.src = src;
                                                    const imgWindow = window.open(src);
                                                    imgWindow.document.write(img.outerHTML);
                                                }}
                                                beforeUpload={() => false} // Prevent auto-upload
                                                multiple
                                            >
                                                {values.imageUrl.length < 5 ? 'Upload' : null}
                                            </Upload>
                                            <div>
                                                {values.imageUrl.length === 1 ? (
                                                    <div>You have added 1 image. You can add 5 in total.</div>
                                                ) : null}
                                            </div>
                                        </div>
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

export default Flat
