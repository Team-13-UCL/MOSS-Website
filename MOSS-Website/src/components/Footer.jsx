import React from 'react'
import RegisterNewsletterForm from './RegisterNewsletterForm'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  return (
    <>
      <div className="p-4 shadow-lg">
        <h1>Footer</h1>
        <SocialMediaIcons />
        <RegisterNewsletterForm />
      </div>
    </>
  )
}

export default Footer