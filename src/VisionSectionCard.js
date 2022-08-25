import React from 'react'

const VisionSectionCard = ({img,title,content}) => {
  return (
    <>
    <div class="col-12 col-lg-4">
      <img src={img} alt="Boxout Solution" className="img-fluid"/>
    <h5 className="text-center">{title}</h5>
    <p>{content}</p>
    </div>
    </>
  )
}

export default VisionSectionCard