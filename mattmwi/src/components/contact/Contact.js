import React, {Component} from 'react';
import './Contact.css'
import ContactForm from './ContactForm';
import SectionContent from '../content/SectionContent';

class Contact extends Component{
    render(){
      return( 
          <div className='contact-container'>
            <div className='contact-section-content'>
              <SectionContent/>
            </div>
            <div className='contact'>
              <ContactForm/>
            </div>    
          </div>
      )
    }
  }
  
  export default Contact