import React from 'react'
import * as Icon from 'react-bootstrap-icons';
const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6 col-md-6 d-flex justify-content-center flex-column align-items-start'>
                    <h1 className='pt-2'>We offer best class solutions <br/>for growing your business</h1>
                    <p>We are team of talented Developers making websites for your business</p>
                    <a href="tel:919628811111" className="btn btn-primary custom_btn shadow">Call Now <Icon.ArrowRight /></a>
                </div>
                <div className='col-12 col-lg-6 col-md-6 d-flex justify-content-center flex-column align-items-center'>
                    <img src="./images/hero-img.png" alt='' className='img-fluid' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header