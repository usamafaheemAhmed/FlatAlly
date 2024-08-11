import { Divider } from 'antd'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Row, Col, InputGroup } from 'react-bootstrap'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { CustomButton, CustomButtonBigButton } from '../../assets/Button/CustomButton'
import * as Yup from "yup";


const ContactForm = () => {


    let initialValues = {
        name: "",
        email: "",
        Description: "",
    }

    let onSubmit = {}

    let validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Enter Valid Email").required("Email is required"),
        Description: Yup.string().required("Description is required"),
    });


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, setFieldValue, handleBlur }) => {
                return (
                    <Form>
                        <div className='row'>
                            <div className='col-md-12 my-1'>
                                <label href="name">Name</label>
                                <Field type="text" id="name" name="name"
                                    className="form-control customInput" placeholder="Enter Name" />
                                <ErrorMessage component="div" name="name" className="text-danger" />
                            </div>
                            <div className='col-md-12 my-1'>
                                <label href="email">Email</label>
                                <Field type="email" id="email" name="email"
                                    className="form-control customInput" placeholder="Enter Email" />
                                <ErrorMessage component="div" name="email" className="text-danger" />

                            </div>
                            <div className='col-md-12 my-1'>
                                <label href="Description">Description</label>
                                <Field as="textarea" type="text" id="Description" name="Description"
                                    rows="6"
                                    className="form-control customInput" placeholder="Enter Description" />
                                <ErrorMessage component="div" name="Description" className="text-danger" />

                            </div>
                            <div className='col-md-12 my-3'>
                                <CustomButton text="Contact" type="submit" />
                            </div>
                        </div>

                    </Form>
                );
            }}
        </Formik>
    )
}

export default ContactForm
