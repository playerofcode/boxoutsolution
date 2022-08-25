import React from 'react'
import * as Icon from 'react-bootstrap-icons';
const Footer = () => {
  return (
    <>
    <section className='footer_top'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <img src="./images/logo.jpg" alt='Boxout Solution' className='logo_style'/>
                <p>Dynamic and full of solutions, we are a B2B startup company that strives for the best and wants to understand what clients want. We offer IT solutions to help you face the future and prepare for unpredictable troubles.</p>
            </div>
            <div className='col-12 col-lg-3'>
                <h5 className='text-white'>Our Brand</h5>
                <ul>
                    <li><a href="https://chatresh.com/" target="_blank"  rel="noreferrer nofollow" ><Icon.ArrowRight /> Chatresh Technologies</a></li>
                    <li><a href="gdfg"><Icon.ArrowRight /> ESCHOOL21</a></li>
                    <li><a href="fg"><Icon.ArrowRight /> CTECH</a></li>
                    <li><a href="gfd"><Icon.ArrowRight /> Download Brochure</a></li>
                </ul>
            </div>
            <div className='col-12 col-lg-3'>
                <h5 className='text-white'>Contact Us</h5>
                <p><b><Icon.PinMapFill /></b>C3/99 Vibhuti Khand Gomti Nagar, Lucknow India</p>
                <p><b><Icon.TelephoneFill /></b>+919628811111</p>
                <p><b><Icon.EnvelopeFill /></b> info@boxoutsolution.com</p>
            </div>
        </div>
    </div>
    </section>
    <div className='container-fluid bg-dark'>
        <div className='row py-2'>
            <div className='col-12 col-lg-12 d-flex justify-content-center align-items-center text-white'>
                Design & Developed by <a href="https://chatresh.com/" className='text-white' target="_blank"  rel="noreferrer nofollow" > &nbsp;Chatresh Technologies</a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer