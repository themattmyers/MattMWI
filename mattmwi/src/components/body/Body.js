import React, {Component} from 'react';
import Card from './cards/Card'
import SectionContent from '../content/SectionContent';
import './Body.css'

class Body extends Component{
    render(){
      return(
        <div>
          <div className='body-carousel'>
              <Card/>
          </div>
          <div className='section-container'>
            <SectionContent/>
          </div>
        </div>
        
      )
    }
  }
  
  export default Body