import React from 'react'
import Motive from '../Motive/Motive'
import { content } from '../../assets/Content/Content'
import { Image } from 'react-bootstrap';

import HatWomen from "../../assets/images/HatWomen.jpg"
import GeneralSearchForm from '../GeneralSearchForm/GeneralSearchForm';
import UsersAccordingRatings from '../UsersAccordingRatings/UsersAccordingRatings';
import { CustomButtonBigCircleOutline, CustomButtonBigCircleView } from '../../assets/Button/CustomButton';
import SwitchCards from '../SwitchCards/SwitchCards';
import UserReviews from '../UserReviews/UserReviews';

const Home = () => {
    let { HomeBlock } = content;
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25'>
                            <h1>Welcome To Flatally</h1>
                            <p>Online Portal where you can find your Perfect room Partner</p>
                        </div>
                        <div>
                            <Image src={HatWomen} fluid alt='Travel Image' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center position-relative' style={{ zIndex: 1 }}>
                <div className='col-md-8'>
                    <div className='bg-dark bg-opacity-25 blurBackdrop rounded shadow mb-4' style={{ minHeight: "10rem", marginTop: "-15rem" }}>
                        <GeneralSearchForm />
                    </div>
                </div>
            </div>

            <div className='row justify-content-center my-5'>
                <div className='col-md-10'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='textGolden m-0'>Best Users</p>
                            <h3>The Best Profiles we Currently Have</h3>
                        </div>
                        <div>
                            <CustomButtonBigCircleView type="Button" text="View All" />
                        </div>
                    </div>
                </div>
                <div className='col-md-10 mt-4'>
                    <UsersAccordingRatings />
                </div>
            </div>

            <div className='row justify-content-center my-5'>
                <div className='col-md-10'>
                    <div className='row'>
                        <div className='col-md-6'>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='textGolden m-0'>Weekly Blog</p>
                                    <h3>The Ultimate Guide to Sharing Space</h3>
                                    <p className='mt-3 text-justify'>In today's digital age, finding a suitable roommate has never been easier. Whether you're a student, a young professional, or someone looking to share living expenses, online platforms have revolutionized the way we search for and connect with potential room partners. These platforms provide a streamlined, efficient way to find individuals whose living habits, preferences, and schedules align with yours, ensuring a harmonious living situation. From detailed profiles to virtual tours and video calls, the process is designed to give you peace of mind and confidence in your choice. In this guide, we’ll explore the best practices for finding your ideal roommate online, tips for creating an attractive profile, and how to navigate the entire process seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='overflow-hidden ' style={{ minHeight: "20rem", height: "20rem" }}>
                                <Image src={HomeBlock[1].image} fluid style={{ transform: "translate(0%, -50%)" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className='row justify-content-center my-5'>
                <div className='col-md-10'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='overflow-hidden ' style={{ minHeight: "20rem", height: "20rem" }}>
                                <Image src={HomeBlock[2].image} fluid />
                            </div>
                        </div>
                        <div className='col-md-6'>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='textGolden m-0'>Weekly Blog</p>
                                    <h3>Revolutionizing Roommate Searches</h3>
                                    <p className='mt-3 text-justify'>The idea for FlatAlly emerged from a simple yet powerful need: the desire for a reliable, efficient way to find compatible roommates. In 2023, our founders recognized the challenges many individuals faced when searching for room partners—be it the frustration of endless searching, incompatible living habits, or the lack of a trustworthy platform. Determined to create a solution, they embarked on a mission to revolutionize the roommate search process.FlatAlly was born out of this vision, combining advanced technology with user-friendly features to create a seamless experience. The platform offers detailed profiles, virtual tours, and secure communication options, ensuring that users can find their ideal roommates with confidence and ease. Our journey has been marked by continuous innovation and a commitment to meeting the evolving needs of our users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
