import React from 'react'
import { Card, Image } from 'react-bootstrap'

import UserReview from "../../assets/Svgs/Online Review-pana.svg"
import ReviewFrom from '../Forms/ReviewFrom'

const GetReviews = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-8'>
          <Card className='shadow p-5'>
            <div className="row align-items-stretch">
              <div className="col-md-6">
                <Image src={UserReview} alt='Loginimg' fluid />
              </div>
              <div className="col-md-6">
                <div className='row mt-4'>
                  <div className='col-md-12 text-center'>
                    <h3><b>Service Reviews</b></h3>
                  </div>
                </div>
                <div className='px-4 mt-4'>
                  <ReviewFrom />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default GetReviews
