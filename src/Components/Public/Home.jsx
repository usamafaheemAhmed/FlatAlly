import React from 'react'
import Motive from '../Motive/Motive'
import { content } from '../../assets/Content/Content'
import { Image } from 'react-bootstrap';

import HatWomen from "../../assets/images/HatWomen.jpg"

const Home = () => {
    let { HomeBlock } = content;
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative'>
                        <div className='position-absolute top-0 left-0 w-100 border'>
                            <h4>Welcome To Flatally</h4>
                            <p>Online Portal where you can find your Perfect room Partner</p>
                        </div>
                        <div>
                            <Image src={HatWomen} fluid alt='Travel Image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
