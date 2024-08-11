import React, { useEffect } from 'react'
import SearchHead from "../../assets/images/SearchHead.jpg"
import { Image, InputGroup } from 'react-bootstrap'
import { Field, Form, Formik } from 'formik'
import { CustomButtonBigButton } from '../../assets/Button/CustomButton'
import { IoLocationOutline } from 'react-icons/io5'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { LoggedInUserData } from '../../Atom'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'


const SearchBook = () => {


    let loggedUser = useRecoilValue(LoggedInUserData);
    let Nav = useNavigate();

    useEffect(() => {
        if (loggedUser && Object.keys(loggedUser).length <= 0) {
            // loggedUser is not an empty object
            localStorage.clear();
            Nav("/auth/Login")
        }
    }, []); // Add loggedUser as a dependency



    let initialValues = {}

    let onSubmit = {}

    let validationSchema = {}


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

                                            <div className='bg-Golden2 w-100 vh-100 mb-3'></div>

                                        </div>
                                        <div className='col-md-8'>
                                            {/* map all Searched Cards Here */}
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
