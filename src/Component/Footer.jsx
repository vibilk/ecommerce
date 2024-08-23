import React from 'react'
import "../Assets/css/Footer.css";
import logo from '../Assets/images/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

function Footer() {
  return (
    <section className='footer_section mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <div className="footer-logo">
              <img src={logo} alt='footer logo' />
            </div>
            <p className='footer_des my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores at sit iusto laudantium error eveniet id provident mollitia voluptas quasi distinctio ipsa, quae in amet quibusdam. Natus, ex odio.
            </p>
            <ul className='m-0 p-0 social_media d-flex'>
              <li>
                <span><FaFacebookF /> </span>
              </li>
              <li>
                <span><RiTwitterXLine /> </span>
              </li>
              <li>
                <span><FaInstagram /> </span>
              </li>
              <li><span><FaPinterestP /> </span></li>

            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <h5 className='footer_title'>Quick Links</h5>
            <ul className='m-0 p-0 quick_links m-0 p-0'>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>About</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Faq</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Blog</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Privacy Policy</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Terms & Conditions</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Contact</a></li>

            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <h5 className='footer_title'>Category</h5>
            <ul className='m-0 p-0 quick_links m-0 p-0'>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Fashion & Clothes</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Dairy & Bakery</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Fruits & Vegetable</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Snack & Spice</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Juice & Drinks</a></li>
              <li className='position-relative'><span><GoArrowRight/></span><a href='#'>Fast Food</a></li>

            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-4">
            <h5 className='footer_title'>Contact</h5>
            <ul className='m-0 p-0 quick_links m-0 p-0'>
              <li className='position-relative'><span><IoLocationSharp/></span><a href='#'>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA</a></li>
              <li className='position-relative'><span><IoMail/></span> <a href='#'> example@email.com</a></li>
              <li className='position-relative'><span><IoCall/></span><a href='#'>+91 123 4567890</a></li>
            </ul>
          </div>


          <div className="col-12">
            <p className="text-center border-top pt-3">Copyright 2024. All rights reserved.</p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer