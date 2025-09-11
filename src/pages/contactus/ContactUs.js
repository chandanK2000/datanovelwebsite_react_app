import React from 'react'
import './ContactUs.css';
import ContactusBanner from './ContactusBanner';
import ContactUsForm from './ContactUsForm';
import OfficeDetails from './OfficeDetails';
import AddressMap from './AddressMap';
const ContactUs = () => {
    return (
      <div style={{ marginTop: '80px' }}>
        <ContactusBanner />
        <ContactUsForm/>
        <OfficeDetails/>
        <AddressMap/>
      </div>
    )
}

export default ContactUs;
