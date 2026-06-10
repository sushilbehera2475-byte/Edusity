import React from 'react'
import './Campus.css'
import Gallery1 from '../../assets/university.jpg'
import HeroImag from '../../assets/Black_arrow 2.jpg'
// import arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={Gallery1} alt="" />
        <img src={Gallery1} alt="" />
        <img src={Gallery1} alt="" />
        <img src={Gallery1} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={HeroImag} alt="" /></button>
    </div>
  )
}

export default Campus
