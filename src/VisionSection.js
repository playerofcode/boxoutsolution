import React from 'react'
import VisionSectionCard from './VisionSectionCard'
const VisionSection = () => {
  return (
    <div className="container">
        <div className="row">
            
                <VisionSectionCard img="./images/img1.png" title="Our Vision" content="Boxoutsolution is one of the prominent software company that helps other organizations to transform into digital enterprises."/>
                <VisionSectionCard img="./images/img2.png" title="Mission" content="Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe."/>
                <VisionSectionCard img="./images/img3.png" title="Value" content="Our values include client and employee satisfaction, social and business responsibility"/>
        </div>
    </div>
  )
}

export default VisionSection