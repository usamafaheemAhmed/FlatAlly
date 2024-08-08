import React from 'react'
import AboutHead from "../../assets/images/AboutHead.jpg"
import { Image } from 'react-bootstrap'
import SwitchCards from '../SwitchCards/SwitchCards'
import { content } from '../../assets/Content/Content'

const About = () => {

    let { CardArray } = content;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 p-0'>
                    <div className='position-relative d-flex justify-content-center align-items-stretch overflow-hidden'>
                        <div className='position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light bg-opacity-25' >
                            <h1>About Flatally</h1>
                            <p>Connecting Roommates with Ease</p>
                        </div>
                        <div>
                            <Image src={AboutHead} alt='Travel Image' rounded className='imgObject' />
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

            <SwitchCards Obj={CardArray.AboutCard1} />
            <br />
            <SwitchCards Obj={CardArray.AboutCard2} />
            <br />
            <SwitchCards Obj={CardArray.AboutCard3} />
        </div>
    )
}

export default About
