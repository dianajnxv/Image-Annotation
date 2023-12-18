import React from 'react'
import './listing.css'
import {Link, useNavigate} from 'react-router-dom'


import { AiFillHeart } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";


import img from '../../../Assets/image (1).png'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        {/*<h1>My Listings</h1>*/}
        <div className="rightCardd flex">
          <h1>Create annotation</h1>
          <p></p>

          <div className="buttons flex">
            <button className='btn'>Explore More</button>

            <Link to={'/annotation'}>     
            <button className='btn transparent'>Create</button>
          </Link>
          </div>
          </div>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
        <AiFillHeart className='icon'/>
        <img src={img} alt='Image Name' />
        <h3>..</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing