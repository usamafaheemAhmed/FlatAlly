import React from 'react'
import { Image } from 'react-bootstrap';
import parse from 'html-react-parser';

const SwitchCards = (props) => {

  let { head, subHead, Para, img, layout } = props.Obj;
  let { ImgHeight } = props.Obj || "20rem";

  return (
    <div className='row justify-content-center my-5'>
      <div className='col-md-10'>
        <div className='row'>
          <div className={`col-md-6 ${layout == "original" ? "order-lg-1" : "order-lg-2"} `}>
            <div className='overflow-hidden' style={{ minHeight: "20rem", height: ImgHeight, width: "100%" }}>
              <Image src={img} fluid className='w-100 h-100' />
            </div>
          </div>
          <div className={`col-md-6 ${layout == "original" ? "order-lg-2" : "order-lg-1"} `}>
            <div className='d-flex justify-content-between'>
              <div>
                <p className='textGolden m-0'>{subHead}</p>
                <h3>{head}</h3>
                <p className='mt-3 text-justify'>{parse(Para)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchCards
