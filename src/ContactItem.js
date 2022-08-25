import React from 'react'
const ContactItem = ({content,icon}) => {
  return (
    <div className="col-12 col-lg-4">
                <div className='card shadow-sm m-2 border-0'>
                    <div className='card-header bg-white border-0'>
                    {icon}
                    </div>
                    <div className='card-body'>
                      <p>{content}</p>
                    </div>
                </div>
            </div>
  )
}

export default ContactItem