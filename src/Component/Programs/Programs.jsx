import React from 'react'
import './Program.css'
import Program_1 from '../../assets/Laptop.jpeg'
import Program_2 from '../../assets/Engineer.jpg'
import Program_icon_1 from '../../assets/graduate-student.jpg'
import Program_icon_2 from '../../assets/master_degree.png'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      <div className="Program">
        <img src={Program_2} alt="" />
        <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={Program_2} alt="" />
        <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Master Degree</p>
        </div>
      </div>
      <div className="Program">
        <img src={Program_2} alt="" />
        <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p> Post graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
