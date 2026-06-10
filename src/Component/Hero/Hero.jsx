import React from 'react'
import './Hero.css'
import HeroImage from '../../assets/Black_arrow 2.jpg'
const Hero = () => {
  return (
    <div className='Hero container'>
      <div className='Hero-content'>
        <h1>Education is the key to success</h1>
        <p>Discover a world of learning opportunities with our comprehensive educational platform.</p>
        <button className='btn'>Get Explore <img src={HeroImage} alt="" /></button>
      </div>
    </div>
  )
}
export default Hero
