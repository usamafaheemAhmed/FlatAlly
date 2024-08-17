import React, { useEffect, useState } from 'react'
import SearchHead from "../../assets/images/SearchHead.jpg"
import { Badge as BadgeBootstrap, Image, InputGroup } from 'react-bootstrap'
import { Field, Form, Formik } from 'formik'
import { CustomButtonBigButton } from '../../assets/Button/CustomButton'
import { IoLocationOutline } from 'react-icons/io5'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { LoggedInUserData, LoggedInUserTokenJwt, WhatUserWantToSearch } from '../../Atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useLocation, useNavigate } from 'react-router-dom'
import { content } from '../../assets/Content/Content'
import { Badge, Pagination, Spin } from 'antd'
import Thinkingillustr from '../../assets/Thinkingillustr/Thinkingillustr'
import * as Yup from 'yup';
import HatWomen from "../../assets/images/HatWomen.jpg"


const SearchBook = () => {

    let { countriesList, bedList } = content;

    let loggedUserJWT = useRecoilValue(LoggedInUserTokenJwt);
    let Nav = useNavigate();

    const location = useLocation();
    const { state } = location;
    let [whatUserWantToSearch, setWhatUserWantToSearch] = useRecoilState(WhatUserWantToSearch);
    let [loading, setLoading] = useState(false);
    let [foundData, setFoundData] = useState([
        {

        }
    ]);


    useEffect(() => {
        if (state && Object.keys(state).length > 0) {

            setWhatUserWantToSearch()
        }

        if (loggedUserJWT && Object.keys(loggedUserJWT).length <= 0) {
            // loggedUser is not an empty object
            localStorage.clear();

            Nav("/auth/Login")
        }
    }, []); // Add loggedUser as a dependency



    let initialValues = {}

    let onSubmit = (values) => {
        console.log(JSON.stringify(values))
    }

    let validationSchema = Yup.object().shape({
        // Gender_Preferences: Yup.string()
        //     .oneOf(['Male', 'Female', 'Other'], 'Invalid gender preference')
        //     .default('Other'),
        // Religion_Preferences: Yup.string()
        //     .default(''),
        // // Country_Preferences: Yup.array()
        // //     .of(Yup.string())
        // //     .default([]),
        // Vegan_NonVegan_Preference: Yup.string()
        //     .oneOf(['Vegan', 'Non-Vegan'], 'Invalid vegan preference')
        //     .default('Non-Vegan'),
        // WorkStatus_Preferences: Yup.array()
        //     .of(Yup.string().oneOf(['Student', 'Employed fullTime', 'Employed PartTime', 'Unemployed', 'Other'], 'Invalid work status'))
        //     .default(['Other']),
        // Alcohol_Preferences: Yup.string()
        //     .oneOf(['No Preference', 'Social Drinker', 'Non-Drinker', 'Occasional'], 'Invalid alcohol preference')
        //     .default('No Preference'),
        // Smoking_Preferences: Yup.boolean()
        //     .default(false),
        // Noise_Preferences: Yup.string()
        //     .oneOf(['Quiet', 'Moderate', 'Loud'], 'Invalid noise preference')
        //     .default('Moderate'),
        // Age_Preferences: Yup.object().shape({
        //     min: Yup.number()
        //         .min(0, 'Minimum age must be at least 0')
        //         .max(150, 'Minimum age cannot be more than 150')
        //         .default(18),
        //     max: Yup.number()
        //         .min(Yup.ref('min'), 'Maximum age must be greater than or equal to minimum age')
        //         .max(150, 'Maximum age cannot be more than 150')
        //         .default(99)
        // })
    })


    return (
        <div className='container-fluid'>
            <div className='row border'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25'>
                            <h1>Search Your Partner & Room</h1>
                            <p className='text-center'>Online Portal where you can find your Perfect room Partner</p>
                        </div>
                        <div>
                            <Image src={SearchHead} fluid alt='Travel Image' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, handleChange, setFieldValue, handleBlur }) => {
                        return (
                            <Form className=''>
                                <div className='d-flex w-100 flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch'>
                                    <div className='py-4 px-3 GeneralInputBlock'>
                                        <CustomButtonBigButton text="Search" type="submit" height="7.2rem" />
                                    </div>

                                    <div className='py-5 px-3 GeneralInputBlock' >
                                        <label htmlFor='location' className='mb-2 textGolden'>Search Your Desired Location</label>
                                        <InputGroup>
                                            <InputGroup.Text className='bg-transparent textGolden borderGolden rounded-0'><IoLocationOutline /></InputGroup.Text>
                                            <Field type="text" id={"location"} name="location"
                                                className="form-control customInput" placeholder="Location" />
                                        </InputGroup>
                                    </div>
                                    <div className='py-5 px-3 GeneralInputBlock'>
                                        <div className='d-flex justify-content-between textGolden'>
                                            <label htmlFor='Gender' className='mb-2 '>Select Gender</label>
                                            {values.Gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}
                                        </div>

                                        <Field type="text" id={"Gender"} name="Gender"
                                            className="form-select customInput" placeholder="Gender"
                                            as="select"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="female">Female</option>
                                        </Field>
                                    </div>

                                </div>
                                <div className='col-md-12'>
                                    <div className='row ps-1'>
                                        <div className='col-md-4 ps-4'>
                                            {/* From of twiking Prefrance */}

                                            <div className='bg-Golden2 text-light w-100 mb-3 p-3'>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="washRoom"> Number of Washroom </label>
                                                        <Field as="select" type="text" id={"washRoom"} name="washRoom"
                                                            className="form-select customInputWhite" placeholder="Number of Washroom" >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="kitchen"> Kitchen </label>
                                                        <div className="preference-container-white">
                                                            <div
                                                                className={`preference-box-white ${values.kitchen === true ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('kitchen', true)}
                                                            >
                                                                Yes
                                                            </div>
                                                            <div
                                                                className={`preference-box-white ${values.kitchen === false ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('kitchen', false)}
                                                            >
                                                                No
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="bedRoom"> Number of Bedroom </label>
                                                        <Field as="select" type="text" id={"bedRoom"} name="bedRoom"
                                                            className="form-select customInputWhite" placeholder="WorkStatus Preferences" >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="bedType"> Number of Bedtype </label>
                                                        <Field as="select" type="text" id={"No_Rooms"} name="No_Rooms"
                                                            className="form-select customInputWhite" placeholder="WorkStatus Preferences" >
                                                            {bedList.map((elem, index) => {
                                                                return (<option value={elem} key={index}>{elem}</option>)
                                                            })}
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="Floor"> Number of Floor </label>
                                                        <Field as="select" type="text" id={"Floor"} name="Floor"
                                                            className="form-select customInputWhite" placeholder="WorkStatus Preferences" >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="No_Rooms"> Number of Rooms </label>
                                                        <Field as="select" type="text" id={"No_Rooms"} name="No_Rooms"
                                                            className="form-select customInputWhite" placeholder="WorkStatus Preferences" >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <label htmlFor="area"> Area </label>
                                                        <InputGroup>
                                                            <InputGroup.Text className='bg-transparent borderGolden text-light rounded-0'><IoLocationOutline /></InputGroup.Text>
                                                            <Field type="text" id={"area"} name="area"
                                                                className="form-control customInputWhite" placeholder="Area" />
                                                        </InputGroup>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='WorkStatus_Preferences'>Work Status Preferences</label>
                                                        <Field as="select" type="text" id={"WorkStatus_Preferences"} name="WorkStatus_Preferences"
                                                            className="form-select customInputWhite" placeholder="WorkStatus Preferences" >
                                                            <option value={"Student"}>Student</option>
                                                            <option value={"Employed fullTime"}>Employed fullTime</option>
                                                            <option value={"Employed PartTime"}>Employed PartTime</option>
                                                            <option value={"Unemployed"}>Unemployed</option>
                                                            <option value={"Other"}>Other</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Noise_Preferences'>Noise Preferences</label>
                                                        <Field as="select" type="text" id={"Noise_Preferences"} name="Noise_Preferences"
                                                            className="form-select customInputWhite" placeholder="Noise Preferences" >
                                                            <option value={"Quiet"}>Quiet</option>
                                                            <option value={"Moderate"}>Moderate</option>
                                                            <option value={"Loud"}>Loud</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Alcohol_Preferences'>Alcohol Preferences</label>
                                                        <Field as="select" type="text" id={"Alcohol_Preferences"} name="Alcohol_Preferences"
                                                            className="form-select customInputWhite" placeholder="Noise Preferences" >
                                                            <option value={"No Preference"}>No Preference</option>
                                                            <option value={"Social Drinker"}>Social Drinker</option>
                                                            <option value={"Non-Drinker"}>Non-Drinker</option>
                                                            <option value={"Occasional"}>Occasional</option>
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Age_Preferences'>Age Preferences</label>
                                                        <InputGroup>
                                                            <Field
                                                                autoComplete='off'
                                                                className='form-control customInputWhite rounded-0'
                                                                type='number'
                                                                id='Age_Preferences_min'
                                                                placeholder='Min'
                                                                name='Age_Preferences.min'
                                                            />
                                                            <Field
                                                                autoComplete='off'
                                                                className='form-control customInputWhite rounded-0'
                                                                type='number'
                                                                id='Age_Preferences_max'
                                                                placeholder='Max'
                                                                name='Age_Preferences.max'
                                                            />
                                                        </InputGroup>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Smoking_Preferences'>Smoking Preferences</label>

                                                        <div className="preference-container-white">
                                                            <div
                                                                className={`preference-box-white ${values.Smoking_Preferences === true ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('Smoking_Preferences', true)}
                                                            >
                                                                Smoker
                                                            </div>
                                                            <div
                                                                className={`preference-box-white ${values.Smoking_Preferences === false ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('Smoking_Preferences', false)}
                                                            >
                                                                Non-Smoker
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Vegan_NonVegan_Preference'>Food Preference</label>

                                                        <div className="preference-container-white">
                                                            <div
                                                                className={`preference-box-white ${values.Vegan_NonVegan_Preference === true ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('Vegan_NonVegan_Preference', true)}
                                                            >
                                                                Vegan
                                                            </div>
                                                            <div
                                                                className={`preference-box-white ${values.Vegan_NonVegan_Preference === false ? "selected" : ""}`}
                                                                onClick={() => setFieldValue('Vegan_NonVegan_Preference', false)}
                                                            >
                                                                Non-Vegan
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Country_Preferences'>Country Preferences</label>
                                                        <Field as="select" type="text" id={"Country_Preferences"} name="Country_Preferences"
                                                            className="form-select customInputWhite" placeholder="Country Preferences" >
                                                            {countriesList.map((elem, index) => {
                                                                return (<option value={elem} key={index}>{elem}</option>)
                                                            })}
                                                        </Field>
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <label htmlFor='Religion_Preferences'>Religion Preferences</label>
                                                        <Field type="text" id={"Religion_Preferences"} name="Religion_Preferences"
                                                            className="form-control customInputWhite" placeholder="Religion Preferences" />
                                                    </div>
                                                    <div className='col-md-12 mt-3'>
                                                        <div className="form-check custom-checkbox">
                                                            <Field className="form-check-input customInput" type="checkbox" id="GrocerySharing_Preferences" name="GrocerySharing_Preferences" />
                                                            <label className="form-check-label mt-1" htmlFor='GrocerySharing_Preferences'>Partner should share grocery</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='col-md-8'>
                                            {/* map all Searched Cards Here */}
                                            <div className='row'>
                                                {loading && <div className='col-md-12 mt-md-4'>
                                                    <div className='row justify-content-center align-items-center' style={{ height: "20rem" }}>

                                                        <Spin tip="Searching Profiles, please wait..." size="large">
                                                            &nbsp;
                                                        </Spin>

                                                    </div>
                                                </div>}
                                                {!loading && foundData.length <= 0 &&

                                                    <div className='d-flex justify-content-center align-items-center'>
                                                        <Thinkingillustr />
                                                    </div>
                                                }
                                                {!loading && foundData.length > 0 &&
                                                    <div className='col-md-12 px-3 pb-3 SearchCardBox'>
                                                        <Badge.Ribbon text="Online">
                                                            <div className="card mb-3">
                                                                <div className="row no-gutters justify-content-stretch">
                                                                    <div className="col-md-4 overflow-hidden">
                                                                        <Image src={HatWomen} alt="what to do" fluid className='h-100 w-100 rounded-start' />
                                                                    </div>
                                                                    <div className="col-md-8">
                                                                        <div className="card-body">
                                                                            <h5 className="card-title"> 6 days Bangkok Phuket</h5>
                                                                            <h5 className="card-title mt-1"> Relaxing Holiday</h5>
                                                                            <div className="row">
                                                                                <div className='col-4'>
                                                                                    <p className='text-secondary p-0 m-0'> <IoLocationOutline /> Area Location</p>
                                                                                </div>
                                                                                <div className='col-8'>
                                                                                    <BadgeBootstrap className='float-end rounded-0 bg-Golden2 '>New</BadgeBootstrap>
                                                                                </div>
                                                                            </div>
                                                                            <p className="card-text">Address</p>
                                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Badge.Ribbon>
                                                        <div className="card mb-3">
                                                            <div className="row no-gutters justify-content-stretch">
                                                                <div className="col-md-4 overflow-hidden">
                                                                    <Image src={HatWomen} alt="what to do" fluid className='h-100 w-100 rounded-start' />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> 6 days Bangkok Phuket</h5>
                                                                        <h5 className="card-title mt-1"> Relaxing Holiday</h5>
                                                                        <div className="row">
                                                                            <div className='col-4'>
                                                                                <p className='text-secondary p-0 m-0'> <IoLocationOutline /> Area Location</p>
                                                                            </div>
                                                                            <div className='col-8'>
                                                                                <BadgeBootstrap className='float-end rounded-0 bg-Golden2 '>New</BadgeBootstrap>
                                                                            </div>
                                                                        </div>
                                                                        <p className="card-text">Address</p>
                                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-3">
                                                            <div className="row no-gutters justify-content-stretch">
                                                                <div className="col-md-4 overflow-hidden">
                                                                    <Image src={HatWomen} alt="what to do" fluid className='h-100 w-100 rounded-start' />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> 6 days Bangkok Phuket</h5>
                                                                        <h5 className="card-title mt-1"> Relaxing Holiday</h5>
                                                                        <div className="row">
                                                                            <div className='col-4'>
                                                                                <p className='text-secondary p-0 m-0'> <IoLocationOutline /> Area Location</p>
                                                                            </div>
                                                                            <div className='col-8'>
                                                                                <BadgeBootstrap className='float-end rounded-0 bg-Golden2 '>New</BadgeBootstrap>
                                                                            </div>
                                                                        </div>
                                                                        <p className="card-text">Address</p>
                                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-3">
                                                            <div className="row no-gutters justify-content-stretch">
                                                                <div className="col-md-4 overflow-hidden">
                                                                    <Image src={HatWomen} alt="what to do" fluid className='h-100 w-100 rounded-start' />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> 6 days Bangkok Phuket</h5>
                                                                        <h5 className="card-title mt-1"> Relaxing Holiday</h5>
                                                                        <div className="row">
                                                                            <div className='col-4'>
                                                                                <p className='text-secondary p-0 m-0'> <IoLocationOutline /> Area Location</p>
                                                                            </div>
                                                                            <div className='col-8'>
                                                                                <BadgeBootstrap className='float-end rounded-0 bg-Golden2 '>New</BadgeBootstrap>
                                                                            </div>
                                                                        </div>
                                                                        <p className="card-text">Address</p>
                                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card mb-3">
                                                            <div className="row no-gutters justify-content-stretch">
                                                                <div className="col-md-4 overflow-hidden">
                                                                    <Image src={HatWomen} alt="what to do" fluid className='h-100 w-100 rounded-start' />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title"> 6 days Bangkok Phuket</h5>
                                                                        <h5 className="card-title mt-1"> Relaxing Holiday</h5>
                                                                        <div className="row">
                                                                            <div className='col-4'>
                                                                                <p className='text-secondary p-0 m-0'> <IoLocationOutline /> Area Location</p>
                                                                            </div>
                                                                            <div className='col-8'>
                                                                                <BadgeBootstrap className='float-end rounded-0 bg-Golden2 '>New</BadgeBootstrap>
                                                                            </div>
                                                                        </div>
                                                                        <p className="card-text">Address</p>
                                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                                <Pagination align="center" defaultCurrent={1} total={50} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>

            </div>

        </div>
    )
}

export default SearchBook
