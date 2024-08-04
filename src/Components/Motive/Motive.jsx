import React from 'react'
import { Image } from 'react-bootstrap'
import { CustomButton } from '../../assets/Button/CustomButton'

const Motive = (props) => {

  return (
    <div>
      <div className='container mb-4'>
        <div className='row'>
          <div className={`col-lg-7  ${props.Obj.first_block ? `${props.Obj.first_block}` : `order-lg-2`}`} style={{ zIndex: "1" }}>
            <div className='Content_box ' data-aos={props.Obj.first_block ? "fade-right" : "fade-left"} data-aos-anchor-placement="center-bottom" >
              <p className='fw-bold text-white'>{props.Obj.slogan} </p>
              <h1 className='text-blue fw-bold'>{props.Obj.title}</h1>
              <p className='text-white'>{props.Obj.para2}</p>
              <div className=' w-100'>
                <CustomButton extra={"me-4"}>{props.owner ? "Learn more" : "undecided"} </CustomButton>
                <button type='button' className=' btn link_btn '>{props.owner ? "Contact" : "Explore More"} </button>
              </div>

            </div>
          </div>
          <div className={`col-lg-5 p-0 m-0 ${props.Obj.second_block ? `${props.Obj.second_block}` : `order-lg-1`}`} >
            <div className='Background_Box'>
              <div className={`${props.Obj.second_block == `order-lg-1` ? `leftOrderSvg1` : `rightOrderSvg1`}`}>

                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a">
                  <path fill="currentColor" d="M830 610.5Q804 721 718 814t-195 21.5q-109-71.5-189.5-114T219 589.5Q185 500 177.5 380t101-174q108.5-54 225-64T694 218.5q74 86.5 118 184t18 208Z" /></clipPath>
                  <pattern id="b" patternUnits="userSpaceOnUse" width="25" height="25" viewBox="0 0 100 100" fill="#b5c2fc">
                    <circle cx="25" cy="25" r="8.333" /><circle cx="75" cy="75" r="8.333" /></pattern></defs>
                  <g clip-path="url(#a)"><path fill="url(#b)" d="M830 610.5Q804 721 718 814t-195 21.5q-109-71.5-189.5-114T219 589.5Q185 500 177.5 380t101-174q108.5-54 225-64T694 218.5q74 86.5 118 184t18 208Z" /></g></svg>
              </div>
              <div className={`${props.Obj.second_block == `order-lg-1` ? `leftOrderSvg2` : `rightOrderSvg2`}`}>

                <svg width="500" height="350" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h2000v1400H0z" />
                  <path d="M0 233h0c56.728-1.292 113.456-2.584 172 2s118.904 15.044 184 21c65.096 5.956 134.93 7.409 198-12 63.07-19.409 119.378-59.679 176-51 56.622 8.679 113.558 66.307 177 70 63.442 3.693 133.39-46.55 193-50 59.61-3.45 108.881 39.893 163 47 54.119 7.107 113.084-22.021 177-23 63.916-.979 132.782 26.191 197 23 64.218-3.191 123.79-36.744 191-46s142.06 5.784 172 13c29.94 7.216 14.97 6.608 40 6" fill="none" stroke="#4439ac" stroke-width="7" stroke-linecap="round" />
                  <path d="M0 266h0c68.226 10.229 136.452 20.457 197 13 60.548-7.457 113.417-32.6 172-43 58.583-10.4 122.88-6.056 187-4s128.062 1.825 184 7c55.938 5.175 103.87 15.758 157 16 53.13.242 111.457-9.855 181-3s150.302 30.663 209 25c58.698-5.663 95.333-40.796 154-50s139.364 7.523 203 17c63.636 9.477 110.21 11.705 173 6 62.79-5.705 141.797-19.344 175-18 33.203 1.344 20.601 17.672 48 34" fill="none" stroke="#c1bde3" stroke-width="7" stroke-linecap="round" />
                  <path d="M0 300h0c67.616-9.961 135.232-19.923 196-25 60.768-5.077 114.689-5.27 172-1 57.311 4.27 118.012 13.006 182 14 63.988.994 131.262-5.752 189-1s105.938 21.004 163 30c57.062 8.996 122.984 10.737 188 11 65.016.263 129.126-.953 192-15 62.874-14.047 124.51-40.927 179-35 54.49 5.927 101.832 44.66 162 52 60.168 7.34 133.16-16.716 206-32 72.84-15.284 145.526-21.795 174-20 28.474 1.795 12.737 11.898 37 22" fill="none" stroke="#4b40af" stroke-width="7" stroke-linecap="round" />
                  <path d="M0 250h0c59.484-5.09 118.967-10.18 183-9 64.033 1.18 132.615 8.63 194 3 61.385-5.63 115.573-24.337 174-18 58.427 6.337 121.092 37.72 178 34 56.908-3.72 108.058-42.542 168-36 59.942 6.542 128.677 58.45 193 65 64.323 6.55 124.233-32.258 181-36 56.767-3.742 110.39 27.58 173 36 62.61 8.42 134.205-6.063 198-12 63.795-5.937 119.791-3.33 185-2s139.631 1.38 170-3 16.684-13.19 43-22" fill="none" stroke="#cac6e7" stroke-width="7" stroke-linecap="round" />
                  <path d="M0 300h0c64.208-7.638 128.416-15.275 191-2s123.543 47.463 181 38c57.457-9.463 111.41-62.575 168-74 56.59-11.425 115.815 18.838 182 39s139.328 30.222 198 22c58.672-8.222 102.874-34.727 159-51 56.126-16.273 124.178-22.314 187-3s120.414 63.985 182 63c61.586-.985 127.167-47.625 191-66s125.916-8.486 192 3 136.167 24.567 165 30 16.417 3.216 44 1" fill="none" stroke="#6f66bf" stroke-width="7" stroke-linecap="round" />
                </svg>
              </div>
              <div >
                <Image src={props.Obj.image} fluid className={`${props.owner ? "owner" : ""}`} data-aos={props.Obj.second_block ? "fade-left" : "fade-right"} data-aos-anchor-placement="center-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Motive
