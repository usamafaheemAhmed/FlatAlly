import React from 'react'
import { CustomButton, CustomButtonBigButton, CustomButtonBigCircleView, CustomButtonLink, CustomButtonOutline } from '../Button/CustomButton'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { CustomDynamicCheck, CustomDynamicInputs, CustomDynamicRadio, CustomDynamicSelect } from '../inputs/CustomDynamicInputs'

const DynamicComp = () => {
    return (
        <div className='container-fluid w-100vw vh-100 darkMode text-light'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center'>Dynamic Components</h1>
                </div>
            </div>

            <div className='row mt-3 '>

                <div className='col-md-12 border-dashed p-2'>
                    <div className='row'>
                        <div className='col-md-2 '>
                            <CustomButton extra={""} type={"button"} fun={() => { console.log("login Clicked") }} text="Login" />
                        </div>
                        <div className='col-md-2 '>
                            <CustomButtonOutline extra={""} type={"button"} fun={() => { console.log("login Clicked") }} text="Login" />
                        </div>
                        <div className='col-md-2 '>
                            <CustomButtonLink extra={""} type={"button"} href={"mailto:hannantahir@gmail.com"} text="Login" />
                        </div>
                        <div className='col-md-2 '>
                            <CustomButtonBigButton extra={""} type={"button"} fun={() => { console.log("login Clicked") }} text="Check availability" />
                        </div>
                        <div className='col-md-2 '>
                            <CustomButtonBigCircleView extra={""} type={"button"} fun={() => { console.log("login Clicked") }} text="View all" icon={<HiOutlineArrowLongRight style={{ fontSize: "3rem" }} />} />
                        </div>
                        <div className='col-md-12 mt-2'>
                            <div className='row'>
                                <div className='col-md-3 mt-2'>

                                    <h6>Simple input</h6>
                                    <CustomDynamicInputs type={"text"}
                                        name={"active1"}
                                        id={"active1"}
                                        Placeholder={"active1"} />
                                </div>
                                
                                <div className='col-md-3 mt-2'>

                                    <h6>Select input</h6>
                                    <CustomDynamicSelect
                                        name={"active1"}
                                        id={"active1"}
                                        options={["option1", "option2", "option3"]}
                                        extra={"mt-2"}
                                    />

                                </div>

                                <div className='col-md-3 mt-2'>
                                    <h6>check input</h6>

                                    <div className='w-100'>
                                        <CustomDynamicCheck
                                            name={"checkINput"}
                                            options={[
                                                {
                                                    title: "i am one Option ",
                                                    values: "op1",
                                                    id: "op1",
                                                },
                                                {
                                                    title: "i am two Option ",
                                                    values: "op2",
                                                    id: "op2",
                                                },
                                                {
                                                    title: "i am three Option ",
                                                    values: "op3",
                                                    id: "op3",
                                                }]}
                                            extra={"mt-2"}
                                        />
                                    </div>
                                </div>

                                <div className='col-md-3 mt-2'>
                                    <h6>radio input</h6>
                                    <div className='w-100'>
                                        <CustomDynamicRadio
                                            name={"radioInput"}
                                            options={[
                                                {
                                                    title: "i am one Option ",
                                                    values: "op1r",
                                                    id: "op1r",
                                                },
                                                {
                                                    title: "i am two Option ",
                                                    values: "op2r",
                                                    id: "op2r",
                                                },
                                                {
                                                    title: "i am three Option ",
                                                    values: "op3r",
                                                    id: "op3r",
                                                }]}
                                            extra={"mt-2"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-2'>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DynamicComp
