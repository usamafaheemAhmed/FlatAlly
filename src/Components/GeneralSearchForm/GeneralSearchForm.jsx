import { Divider } from 'antd'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Row, Col, InputGroup } from 'react-bootstrap'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { CustomButtonBigButton } from '../../assets/Button/CustomButton'

const GeneralSearchForm = () => {

    let initialValues = {}

    let onSubmit = {}

    let validationSchema = {}

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, setFieldValue, handleBlur }) => {
                return (
                    <Form className='text-light'>
                        <div className='d-flex w-100 h-100 flex-column flex-md-row justify-content-center align-items-center align-items-md-stretch'>
                            <h4 className='d-none'>Search Your Desired Location</h4>
                            <div className='py-5 px-3 GeneralInputBlock' >
                                <label htmlFor='location' className='mb-2'>Search Your Desired Location</label>
                                <InputGroup>
                                    <InputGroup.Text className='bg-transparent text-light rounded-0'><IoLocationOutline /></InputGroup.Text>
                                    <Field type="text" id={"location"} name="location"
                                        className="form-control customInputWhite" placeholder="Location" />
                                </InputGroup>
                            </div>
                            <div className='GeneralDividers'></div>
                            <div className='py-5 px-3 GeneralInputBlock'>
                                <div className='d-flex justify-content-between'>
                                    <label htmlFor='Gender' className='mb-2'>Select Gender</label>
                                    {values.Gender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}
                                </div>

                                <Field type="text" id={"Gender"} name="Gender"
                                    className="form-select customInputWhite" placeholder="Gender"
                                    as="select"
                                >
                                    <option value="Male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                            </div>
                            <div className='GeneralDividers'></div>
                            <div className='py-4 px-3 GeneralInputBlock'>
                                <CustomButtonBigButton text="Search" type="submit" height="7.2rem" />
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default GeneralSearchForm
