import React from 'react'
import './top.css'

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";


import img from '../../../Assets/user (3).png'
import img2 from '../../../Assets/image (2).png'
import img11 from '../../../Assets/image11.jpg'


const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to PicturePrecision</h1>
          <p>Hello, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type='text' placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>
        
        <div className="adminDiv flex">
        <TbMessageCircle className='icon'/>
        <IoNotificationsOutline className='icon'/>
        <div className="adminImage">
          <img src={img} alt='Admin Image' />
        </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          {/*<h1>Create and sell products</h1>
          <p>The world's...</p>

          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Sellers</button>
          </div>*/}

          <div className="pictureDiv">
            <img src={img11} alt='Image Name' />
           </div>
        </div>

        <div className="leftCard flex">
          <div className='main flex'>
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                 <small> Today 4 Images
                  This Month 124 Images</small>
                </span>
              </div>

              <span className="flex link">
                Go to your images <BsArrowRightShort className='icon'/>
              </span>
              
            </div>

            <div className='imgDiv'>
              <img src={img2} alt='Image Name' />
            </div>

          {/*  <div className='sideBarCard'>
              <BsQuestionCircle className='icon'/>
              <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle2'></div>

                 <h3>Help Center</h3>
                 <p>Having troubles in .. please contact us for more question</p>
                 <button className='btn'>Go to help center</button>
               </div>
              </div>*/}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Top