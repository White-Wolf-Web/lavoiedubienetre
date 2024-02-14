import React from 'react'
import GoogleMap from '../googleMap/GoogleMap'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <div className="flex flex-col justify-between items-center h-[830px] mx-auto">
{/*<ContactForm />*/}
<GoogleMap />
    </div>
  )
}
