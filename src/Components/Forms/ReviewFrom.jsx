
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'

import * as Yup from "yup";
import { openNotificationSuccess, PostAxios } from '../../assets/Alert/Alert';
import { defaultApiUrl } from '../../Atom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';


const ReviewFrom = () => {
    let defaultApi = useRecoilValue(defaultApiUrl);

    let Nav = useNavigate();

    let initialValues = {
        ReviewsDescription: "",
    }

    let onSubmit = async (values) => {
        console.log("Submitted Values:", JSON.stringify(values));

        let head = "";
        let Token = localStorage.getItem("LoginToken");

        if (JSON.parse(Token)?.accessToken) {
            head = {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(Token).accessToken}`,
                    'Content-Type': 'application/json' // Optional, specify if you are sending JSON data
                }
            };
        }

        try {
            // Call the Reviews/Add API
            let res = await PostAxios(defaultApi + "/api/Reviews/Add", values, head);

            if (res) {
                console.log("API Response:", JSON.stringify(res));

                // Handle the response based on your API's response format
                // Example: Assuming res contains a success message or confirmation
                notifySuccess("Review Added", "Your review was successfully submitted. Thank you for your Time", "success");
                Nav("/Search");

                // Optionally update state or UI with the response data if needed
                // setReviewData(res.data); // Example if the response contains review data

            }
        } catch (error) {
            console.error("Error during submission:", error);

            if (error?.response?.status === 403 && error?.response?.data === "Forbidden") {
                notifySuccess("Login Expired", "You need to login again to access this page", "error");
                localStorage.clear();
                Nav("/auth/Login");
            } else {
                // Show an error notification
                notifySuccess("Error", "An error occurred while trying to add the review. Please try again.", "error");
            }
        }
    };

    // Helper function for showing notifications
    const notifySuccess = (message, ReviewsDescription, type) => {
        // const type = type;
        const placement = "topRight";
        openNotificationSuccess(type, placement, message, ReviewsDescription);
    };


    let validationSchema = Yup.object().shape({
        ReviewsDescription: Yup.string().required("ReviewsDescription is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, setFieldValue, handleBlur, handleSubmit }) => {
                return (
                    <Form>
                        <div className='row'>
                            <div className='col-md-12 my-1'>
                                <label href="ReviewsDescription">Reviews Description</label>
                                <Field as="textarea" type="text" id="ReviewsDescription" name="ReviewsDescription"
                                    rows="6"
                                    className="form-control customInput" placeholder="Enter Reviews ReviewsDescription" />
                                <ErrorMessage component="div" name="ReviewsDescription" className="text-danger" />
                            </div>
                            <div className='col-md-12 my-3'>
                                <button className={`primary btn w-100`} type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>

                    </Form>
                );
            }}
        </Formik>
    )
}

export default ReviewFrom
