import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { FormikAgePreferences, FormikInput, FormikSelect, FormikSmokingPreferences } from '../../assets/inputs/CustomDynamicInputs';
import { Image } from 'react-bootstrap';
import sampleImage2 from "../../assets/Svgs/profile-user-svgrepo-com.svg";
import * as Yup from 'yup';


const Preferences = () => {

    const [EditState, setEditState] = useState(true); // State for preview image


    let initialValues = {
        Gender_Preferences: 'Other',
        Religion_Preferences: '',
        Country_Preferences: [''],  // Array with an empty string
        Vegan_nonVegan_Preference: 'Non-Vegan',
        GrocerySharing_Preferences: false,
        WorkStatus_Preferences: ['Other'],  // Array with 'Other'
        Alcohol_Preferences: 'No Preference',
        Smoking_Preferences: false,
        Noise_Preferences: 'Moderate',
        Pet_Preferences: [],
        Age_Preferences: {
            min: 18,
            max: 99
        }
    };

    let onSubmit = (values) => {
        console.log(values);
    }

    let validationSchema = Yup.object().shape({
        Gender_Preferences: Yup.string()
            .oneOf(['Male', 'Female', 'Other'], 'Invalid gender preference')
            .default('Other'),
        Religion_Preferences: Yup.string()
            .default(''),
        Country_Preferences: Yup.array()
            .of(Yup.string())
            .default([]),
        Vegan_NonVegan_Preference: Yup.string()
            .oneOf(['Vegan', 'Non-Vegan'], 'Invalid vegan preference')
            .default('Non-Vegan'),
        WorkStatus_Preferences: Yup.array()
            .of(Yup.string().oneOf(['Student', 'Employed fullTime', 'Employed PartTime', 'Unemployed', 'Other'], 'Invalid work status'))
            .default(['Other']),
        Alcohol_Preferences: Yup.string()
            .oneOf(['No Preference', 'Social Drinker', 'Non-Drinker', 'Occasional'], 'Invalid alcohol preference')
            .default('No Preference'),
        Smoking_Preferences: Yup.boolean()
            .default(false),
        Noise_Preferences: Yup.string()
            .oneOf(['Quiet', 'Moderate', 'Loud'], 'Invalid noise preference')
            .default('Moderate'),
        Age_Preferences: Yup.object().shape({
            min: Yup.number()
                .min(0, 'Minimum age must be at least 0')
                .max(150, 'Minimum age cannot be more than 150')
                .default(18),
            max: Yup.number()
                .min(Yup.ref('min'), 'Maximum age must be greater than or equal to minimum age')
                .max(150, 'Maximum age cannot be more than 150')
                .default(99)
        }),
    });

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


    const selectOptionsGender = [
        { value: 'Other', label: 'Other' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
    ];

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values, setFieldValue, handleBlur }) => (
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
                                <div className='col-md-4'>
                                    <FormikSelect
                                        name="Gender_Preferences"
                                        label="Gender Preferences"
                                        options={selectOptionsGender}
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Religion_Preferences"
                                        placeholder="Religion Preferences"
                                        variant="borderless"
                                        label="Religion Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Country_Preferences"
                                        placeholder="Country Preferences"
                                        variant="borderless"
                                        label="Country Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikSmokingPreferences
                                        name="Vegan_nonVegan_Preference"
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
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="GrocerySharing_Preferences"
                                        placeholder="GrocerySharing_Preferences"
                                        variant="borderless"
                                        label="Grocery Sharing Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="WorkStatus_Preferences"
                                        placeholder="WorkStatus_Preferences"
                                        variant="borderless"
                                        label="WorkStatus Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Alcohol_Preferences"
                                        placeholder="Alcohol Preferences"
                                        variant="borderless"
                                        label="Alcohol Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikSmokingPreferences
                                        name="Smoking_Preferences"
                                        disabled={EditState}
                                        label="Smoking Preferences"
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
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Noise_Preferences"
                                        placeholder="Noise Preferences"
                                        variant="borderless"
                                        label="Noise Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Pet_Preferences"
                                        placeholder="Pet Preferences"
                                        variant="borderless"
                                        label="Pet Preferences"
                                        type="text"
                                        disabled={EditState}
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <FormikInput
                                        name="Age_Preferences"
                                        placeholder="Age_Preferences"
                                        variant="borderless"
                                        label="Age Preferences"
                                        type="text"
                                    />
                                    <FormikAgePreferences
                                        disabled={EditState}
                                        name="Age_Preferences"
                                        label="Age Preferences"
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

export default Preferences
