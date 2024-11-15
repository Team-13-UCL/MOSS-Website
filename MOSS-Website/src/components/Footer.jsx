import React from 'react'
import RegisterNewsletterForm from './RegisterNewsletterForm'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  return (
    <>
      <div className="p-4 shadow-lg bg-5 bg-opacity-30">
        <SocialMediaIcons />
        <RegisterNewsletterForm />
      </div>
    </>
  )
}

export default Footer