import React from 'react'
import { content } from '../../assets/Content/Content'
import { Image } from 'react-bootstrap';

import HatWomen from "../../assets/images/HatWomen.jpg"
import GeneralSearchForm from '../GeneralSearchForm/GeneralSearchForm';
import UsersAccordingRatings from '../UsersAccordingRatings/UsersAccordingRatings';
import { CustomButtonBigCircleView } from '../../assets/Button/CustomButton';
import UserReviews from '../UserReviews/UserReviews';
import SwitchCards from '../SwitchCards/SwitchCards';

const Home = () => {
    let { CardArray } = content;
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25'>
                            <h1>Welcome To Flatally</h1>
                            <p className='text-center'>Online Portal where you can find your Perfect room Partner</p>
                        </div>
                        <div>
                            <Image src={HatWomen} fluid alt='Travel Image' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center position-relative d-none d-md-flex' style={{ zIndex: 1 }}>
                <div className='col-md-8'>
                    <div className='bg-dark bg-opacity-25 blurBackdrop rounded shadow mb-4 GeneralFormLocation' >
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

            <SwitchCards Obj={CardArray.HomeCard1} />

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



            <SwitchCards Obj={CardArray.HomeCard2} />


        </div>
    )
}

export default Home
