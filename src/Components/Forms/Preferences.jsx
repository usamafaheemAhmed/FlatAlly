import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { FormikAgePreferences, FormikInput, FormikSelect, FormikSmokingPreferences } from '../../assets/inputs/CustomDynamicInputs';
import { Image, InputGroup } from 'react-bootstrap';
import sampleImage2 from "../../assets/Svgs/profile-user-svgrepo-com.svg";
import * as Yup from 'yup';
import { content } from '../../assets/Content/Content';
import { defaultApiUrl, LoggedInUserTokenJwt, PreferenceState } from '../../Atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { openNotificationSuccess, PatchAxios, PostAxios } from '../../assets/Alert/Alert';
import { message } from 'antd';


const Preferences = () => {

    let [PreferenceObj, setPreferenceObj] = useRecoilState(PreferenceState);
    let defaultApi = useRecoilValue(defaultApiUrl);

    let { countriesList2, selectOptionsGender, selectOptionsWork, selectOptionAlcohol, selectOptionNoise, selectOptionPet, } = content

    const [EditState, setEditState] = useState(true); // State for preview image


    let initialValues = {
        Gender_Preferences: 'Other',
        Religion_Preferences: '',
        Country_Preferences: ["Greece"],  // Array with an empty string
        Vegan_NonVegan_Preference: true,
        GrocerySharing_Preferences: false,
        WorkStatus_Preferences: ['Other'],  // Array with 'Other'
        Alcohol_Preferences: 'No Preference',
        Smoking_Preferences: false,
        Noise_Preferences: 'Moderate',
        Pet_Preferences: ["Dog"],
        Age_Preferences: {
            min: 18,
            max: 99
        }
    };
    let loggedUserJWT = useRecoilValue(LoggedInUserTokenJwt);

    let onSubmit = async (values) => {
        // alert(values);
        try {
            let formData = {
                Gender_Preferences: values.Gender_Preferences,
                Religion_Preferences: values.Religion_Preferences,
                Country_Preferences: values.Country_Preferences,
                Vegan_NonVegan_Preference: values.Vegan_NonVegan_Preference,
                GrocerySharing_Preferences: values.GrocerySharing_Preferences,
                WorkStatus_Preferences: values.WorkStatus_Preferences,
                Alcohol_Preferences: values.Alcohol_Preferences,
                Smoking_Preferences: values.Smoking_Preferences,
                Noise_Preferences: values.Noise_Preferences,
                Pet_Preferences: values.Pet_Preferences,
                Age_Preferences: values.Age_Preferences,
            };

            // Determine if creating a new user or updating an existing one
            const isNewUser = !PreferenceObj || Object.keys(PreferenceObj).length === 0 || !PreferenceObj._id;
            let response;
            let head = "";
            let Token = localStorage.getItem("LoginToken");

            if (JSON.parse(Token).accessToken) {
                head = {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(Token).accessToken}`,
                        'Content-Type': 'application/json' // Optional, specify if you are sending JSON data
                    }
                }
            }
            console.log(formData)

            if (isNewUser) {
                response = await PostAxios(`${defaultApi}/api/Preferences/Add`, formData, head);
                if (response) {
                    setPreferenceObj({ ...response });
                    notifySuccess('User Data Added', 'Please check the added user data.', "success");
                }
            } else {
                formData._id = PreferenceObj._id;
                response = await PatchAxios(`${defaultApi}/api/Preferences/Update/${PreferenceObj._id}`, formData, head);
                if (response) {
                    setPreferenceObj({ ...response, _id: PreferenceObj._id });
                    notifySuccess('User Data Updated', 'Please check the updated user data.', "success");
                }
            }

            setEditState(true);
            console.log(values, "Values are");
        } catch (error) {
            console.error('Error submitting the form:', error);
            message.error('An error occurred while submitting the form. Please try again.');
        }
    };

    // Helper function for showing notifications
    const notifySuccess = (message, description, type) => {
        // const type = type;
        const placement = "topRight";
        openNotificationSuccess(type, placement, message, description);
    };


    let validationSchema = Yup.object().shape({
        Gender_Preferences: Yup.string()
            .oneOf(['Male', 'Female', 'Other'], 'Invalid gender preference')
            .default('Other'),
        Religion_Preferences: Yup.string()
            .default(''),
        Country_Preferences: Yup.array()
            .of(Yup.string())
            .default([]),
        Vegan_NonVegan_Preference: Yup.boolean()
            .default(false),
        WorkStatus_Preferences: Yup.array()
            .of(Yup.string().oneOf(['Student', 'Employed fullTime', 'Employed PartTime', 'Unemployed', 'Other'], 'Invalid work status'))
            .default(['Other']),
        Alcohol_Preferences: Yup.string()
            .oneOf(['No Preference', 'Social Drinker', 'Non-Drinker', 'Occasional'], 'Invalid alcohol preference')
            .default('No Preference'),
        Smoking_Preferences: Yup.boolean()
            .default(false),
 
    });


    let AllowEdit = (e) => {
        setEditState(!EditState)
    }


    function fillValues(setFieldValue) {
        if (PreferenceObj && Object.keys(PreferenceObj).length > 0) {
            setFieldValue("Gender_Preferences", PreferenceObj.Gender_Preferences)
            setFieldValue("Religion_Preferences", PreferenceObj.Religion_Preferences)
            setFieldValue("Country_Preferences", PreferenceObj.Country_Preferences)
            setFieldValue("Vegan_NonVegan_Preference", PreferenceObj.Vegan_NonVegan_Preference)
            setFieldValue("GrocerySharing_Preferences", PreferenceObj.GrocerySharing_Preferences)
            setFieldValue("WorkStatus_Preferences", PreferenceObj.WorkStatus_Preferences)
            setFieldValue("Alcohol_Preferences", PreferenceObj.Alcohol_Preferences)
            setFieldValue("Smoking_Preferences", PreferenceObj.Smoking_Preferences)
            setFieldValue("Noise_Preferences", PreferenceObj.Noise_Preferences)
            setFieldValue("Pet_Preferences", PreferenceObj.Pet_Preferences)
            setFieldValue("Age_Preferences", PreferenceObj.Age_Preferences)
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
                }, [])

                return (
                    <Form>
                        <div className='row'>
                            <h5 className='mb-3'>Preferences Data
                                {EditState ?
                                    <span role='button' className='float-end btn btn-secondary'
                                        onClick={AllowEdit}> Edit Preferences</span>
                                    :
                                    <button type='Submit' className='float-end btn btn-secondary'>
                                        Update Preferences
                                    </button>} </h5>

                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Gender_Preferences"
                                            label="Gender Preferences"
                                            options={selectOptionsGender}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikInput
                                            name="Religion_Preferences"
                                            placeholder="Religion Preferences"
                                            variant="borderless"
                                            label="Religion Preferences"
                                            type="text"
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Country_Preferences"
                                            label="Country Preferences"
                                            options={countriesList2}
                                            disabled={EditState}
                                            mode='multiple'
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSmokingPreferences
                                            name="Vegan_NonVegan_Preference"
                                            disabled={EditState}
                                            label="Vegan nonVegan Preference"
                                            option={{
                                                First: "Vegan",
                                                Second: "Non-Vegan",
                                            }}
                                            extra={{
                                                mainHead: "",
                                                innerHead: ""
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <label htmlFor='Age_Preferences'>Age Preferences</label>

                                        <InputGroup>
                                            <Field
                                                autoComplete='off'
                                                className={`form-control ${EditState ? "border-none" : "border"}`}
                                                type='number'
                                                id='Age_Preferences_min'
                                                placeholder='Enter minimum age'
                                                name='Age_Preferences.min'
                                                disabled={EditState}
                                            />
                                            <Field
                                                autoComplete='off'
                                                className={`form-control ${EditState ? "border-none" : "border"}`}
                                                type='number'
                                                id='Age_Preferences_max'
                                                placeholder='Enter maximum age'
                                                name='Age_Preferences.max'
                                                disabled={EditState}
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="WorkStatus_Preferences"
                                            label="WorkStatus Preferences"
                                            options={selectOptionsWork}
                                            disabled={EditState}
                                            mode='multiple'
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Alcohol_Preferences"
                                            label="Alcohol Preferences"
                                            options={selectOptionAlcohol}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSmokingPreferences
                                            name="Smoking_Preferences"
                                            disabled={EditState}
                                            label="Smoking Preferences"
                                            option={{
                                                First: "Smoker",
                                                Second: "Non-Smoker",
                                            }}
                                            extra={{
                                                mainHead: "",
                                                innerHead: ""
                                            }}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Noise_Preferences"
                                            label="Noise Preferences"
                                            options={selectOptionNoise}
                                            disabled={EditState}
                                        />
                                    </div>
                                    <div className='col-md-4 mb-2'>
                                        <FormikSelect
                                            name="Pet_Preferences"
                                            label="Pet Preferences"
                                            options={selectOptionPet}
                                            disabled={EditState}
                                            mode="tags"
                                        />
                                    </div>

                                    <div className='col-md-4 mb-2'>
                                        <div className="form-check custom-checkbox mt-4">
                                            <Field className="form-check-input customInput" type="checkbox" id="GrocerySharing_Preferences" checked={values.GrocerySharing_Preferences} name="GrocerySharing_Preferences" />
                                            <label className="form-check-label mt-1" htmlFor='GrocerySharing_Preferences'>Partner should share grocery</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default Preferences
