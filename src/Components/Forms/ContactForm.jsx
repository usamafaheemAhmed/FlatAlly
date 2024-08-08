import { Divider } from 'antd'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Row, Col, InputGroup } from 'react-bootstrap'
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { CustomButton, CustomButtonBigButton } from '../../assets/Button/CustomButton'


const ContactForm = () => {


    let initialValues = {
        name: ""
    }

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
                    <Form>
                        <div className='row'>
                            <div className='col-md-12 my-1'>
                                <label href="name">Name</label>
                                <Field type="text" id="name" name="name"
                                    className="form-control customInput" placeholder="Enter Name" />
                            </div>
                            <div className='col-md-12 my-1'>
                                <label href="email">Email</label>
                                <Field type="email" id="email" name="email"
                                    className="form-control customInput" placeholder="Enter Email" />
                            </div>
                            <div className='col-md-12 my-1'>
                                <label href="Description">Description</label>
                                <Field as="textarea" type="text" id="Description" name="Description"
                                    rows="6"
                                    className="form-control customInput" placeholder="Enter Description" />
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
