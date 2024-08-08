import React from 'react'
import ContactHead from "../../assets/images/ContactHead.jpg"
import { Image } from 'react-bootstrap'
import SwitchCards from '../SwitchCards/SwitchCards'
import { content } from '../../assets/Content/Content'
import { CustomButtonBigCircleView } from '../../assets/Button/CustomButton'
import UserReviews from '../UserReviews/UserReviews'
import ContactForm from '../Forms/ContactForm'
import { IoMdMail } from 'react-icons/io'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Contact = () => {

    let { CardArray } = content;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25' >
                            <h1>Contact Flatally</h1>
                            <p>For More Quires Contact our Help Service </p>
                        </div>
                        <div>
                            <Image src={ContactHead} alt='Travel Image' fluid className='imgObject' s />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center my-5'>
                <div className='col-md-10'>
                    <div className='d-flex justify-content-center flex-column align-item-center'>
                        <p className='textGolden text-center m-0'>Our History</p>
                        <h3 className='text-center'>The Best Profiles we Currently Have</h3>
                    </div>
                </div>
            </div>

            <SwitchCards Obj={CardArray.ContactCard1} />


            <div className='row justify-content-center bg-Golden my-3 py-5'>
                <div className='col-md-10'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='textGolden m-0'>Users Reviews</p>
                            <h3>User Reviews on Finding Roommates Online</h3>
                        </div>
                        <div>
                            <CustomButtonBigCircleView type="Button" text="View All" />
                        </div>
                    </div>
                </div>
                <div className='col-md-10 py-5'>
                    <UserReviews />
                </div>
            </div>

            <br />
            <SwitchCards Obj={CardArray.ContactCard2} />

            <div className='row justify-content-center bg-Golden my-3 py-5'>
                <div className='col-md-10'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <p className='textGolden m-0'>User Contact</p>
                            <h3>Contact FlatAlly</h3>
                            <ContactForm />
                        </div>
                        <div className='col-md-5'>
                            <h3 className=''>Social Media</h3>
                            <h5 className='mt-5'>Email</h5>
                            <a href='mailto:HannanTahir@gmail.com' className='text-dark nav-link'> <IoMdMail className='textGolden' style={{ fontSize: "25px", marginTop: "-2.5px" }} /> HannanTahir@gmail.com</a>
                            <h5 className='mt-3'>FaceBook</h5>
                            <a href='#FaceBookUrl' className='text-dark nav-link'> <FaFacebookSquare className='textGolden' style={{ fontSize: "25px", marginTop: "-2.5px" }} /> FlatAlly FaceBook</a>
                            <h5 className='mt-3'>Instagram</h5>
                            <a href='#Instagram' className='text-dark nav-link'> <FaInstagram className='textGolden' style={{ fontSize: "25px", marginTop: "-2.5px" }} /> FlatAlly Instagram</a>
                            <h5 className='mt-3'>Linkedin</h5>
                            <a href='#Linkedin' className='text-dark nav-link'> <FaLinkedin className='textGolden' style={{ fontSize: "25px", marginTop: "-2.5px" }} /> FlatAlly Linkedin</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
