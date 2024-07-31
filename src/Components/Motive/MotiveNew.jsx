import React from 'react'
import { Image } from 'react-bootstrap'

import { useNavigate } from "react-router-dom";
import CustomButton from '../../assets/Button/CustomButton';
import { content } from '../../content/Content';

const MotiveNew = (props) => {

  let Navigate = useNavigate();


  return (
    <div>
      <div className='container-fluid mb-4 bg-Mix ' >
        <div className='row justify-content-center align-items-center text-center vh-100' data-aos={"flip-right"} data-aos-anchor-placement="center-bottom">
          <div className='col-md-10'>
            <h3 className='text-blue'>{props.obj.title}</h3>
            <p className='fw-bold text-white'>{props.obj.slogan} </p>
            <p className='text-white'>{props.obj.para2} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MotiveNew
