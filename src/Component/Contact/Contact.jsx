import React from 'react'
import './Contact.css'
import message from '../../assets/message-ico.webp'
import email from '../../assets/email-icon.webp'
import phone from '../../assets/phone-icon.webp'
import location from '../../assets/location-icon.webp'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message<img src={message} alt="" /></h3>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        <ul>
            <li><img src={email} alt="" />sushil210@gmail.com</li>
            <li><img src={phone} alt="" />+91 6372749567</li>
            <li><img src={location} alt="" />143, Badaraghunathpur, Bhubaneswer, India</li>

        </ul>
      </div>
      <div className="bg-blue-100 p-4 rounded-lg">
        <form>
            <div className='border-2 border-solid ... mt-4 p-4'><label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter Your Name'  required/></div>

            <div className='border-2 border-solid ...'><label htmlFor="tel">Your Phone Number</label>
            <input type="tel" placeholder='Enter Phone Number'required /></div>

            {/* <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Your Email' /> */}

            <div className='border-2 border-solid ...'>
              <label htmlFor="message">Write your Message here</label>
            <textarea
             name="message"
            rows="6" id="message" placeholder='Enter Your Message' required></textarea>
            </div>

            <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
