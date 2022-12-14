import { MailIcon, MailOpenIcon } from '@heroicons/react/outline'
import React from 'react'

function Footer() {
    return (
        <div id="contact" className="info_section ">
          <br />
          <div className="container">
            <div className="info_container">
              <div className="info_social">
                <h3>PERSONAL DETAILS</h3>

                <h6>Ashok Thampi</h6>
                <h6>contact:8281049141</h6>
                <h6>Location:Mundakayam</h6>
                <h6>Email:dezirethampi@gmail.com</h6><br /><br />

                <div className="d-flex justify-content-center">
                  <h4 className="">
                    Follow on
                  </h4>


                </div>

                <div className="social_box">
                  <a href="https://www.facebook.com/weddingcastlecreation/" target="_blank" rel="noreferrer" >
                    <img src="images/fb.png" alt="" style={{height:"40px",padding:"-10px"}}/>
                  </a>
                  <a href="https://www.instagram.com/weddingcastlecreations/feed/"target="_blank" rel="noreferrer" >
                    <img src="images/instagram1.png" alt="" style={{height:"60px"}}/>
                  </a>
                  <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=weddingcastlecreations@gmail.com&tf=1"target="_blank" rel="noreferrer" >
                    <img src="images/gmailLogo1.png" alt="" style={{height:"40px"}}/>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Footer