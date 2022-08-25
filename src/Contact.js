import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import Footer from './Footer';
const Contact = () => {
  return (
    <>
    <div className='container'>
      <div className='row p-3'>
        <h3 className='text-center'>Contact Us</h3>
        <div className='col-12 col-lg-12'>
          <div className='row text-center'>
            <ContactItem icon={<Icon.GeoAlt size="38" color="#4154f1"/>} content="C3/99 Vibhuti Khand, Gomti Nagar, Lucknow, India"/>
            <ContactItem icon={<Icon.Telephone size="38" color="#4154f1"/>} content="+919628811111"/>
            <ContactItem icon={<Icon.Envelope size="38" color="#4154f1"/>} content="info@boxoutsolution.com"/>
          </div>
        </div>
      </div>
      <div className='row py-3'>
        <div className='col-12 col-lg-6'>
        <h3 className='text-center'>Fill Free to Contact Us</h3>
          <ContactForm/>
        </div>
        <div className='col-12 col-md-6'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2789701947595!2d80.99945411436468!3d26.862876468702037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3fb20a63c0b%3A0x99bcf1358c365fdc!2sChatresh%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657358557950!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" title="Boxout Solution" ></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact