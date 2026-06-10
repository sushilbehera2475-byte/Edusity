import React, { use } from 'react'
import { useRef } from 'react'

import './Testimonial.css'
import NextBtn from '../../assets/next-icon.png'
import BackBtn from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.jpeg'
import user2 from '../../assets/user-2.jpeg'
import user3 from '../../assets/user-3.jpeg'
import user4 from '../../assets/user-4.jpeg'

const Testimonial = () => {

  const slider = useRef();
  let tx=0;
  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
    const slideBackward = ()=>{
      if(tx < 0){
        tx=tx+25;
      }
      slider.current.style.transform=`translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={NextBtn} alt="" className='next-btn' onClick={slideForward}/>
      <img src={BackBtn} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Education is a fundamental pillar
                 for personal and societal growth,
                  acting as the key to unlocking
                   a brighter future. It equips
                    individuals with knowledge, skills,
                     </p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Education goes far beyond textbooks and classrooms; it is a holistic process that nurtures the entire personality. It develops intellectual abilities, enhances problem-solving skills, and fosters a sense of curiosity</p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>Education is the cornerstone of national development, serving as the foundation upon which a prosperous and stable society is built. It is a powerful weapon that can transform societies by eliminating ignorance, poverty, and prejudice.</p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p> Beyond academic achievements, education fosters character, instills moral values, and enhances confidence. It empowers people to make informed decisions, breaks the cycle of poverty, and reduces social inequalities.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial;
