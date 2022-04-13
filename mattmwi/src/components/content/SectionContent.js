import React, { useState} from 'react';
import './SectionContent.css'

function SectionContent (){
   const [state, setState] =  useState({clicked: false})
   const[sorted, setSorted] = useState(false);
    let sortedArray = false;
    let click = false;
    const names1 = ['Matt Johnson', 'Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm'];
    const names2 = ['Matt Johnson', 'Bart Paden', 'Bart Paden', 'Jordan Heigle', 'Jordan Heigle', 'Tyler Viles']
    const [namesWithoutDups, setNamesWithoutDups] = useState([]);

    const handleClick = () => {
      setState({clicked: true})
      click = true;
      if (sorted){
        alert('Array has already been sorted');
      }
      else if (click && !sortedArray){
        setNamesWithoutDups( [...new Set([...names1 ,...names2])]);
        setSorted(true);
        console.log('Array sorted!');
        sortedArray = true;
      }
    }
{
      return(
          <div className='body-container'>
              <div>
              <h1 className='body-section-header'><span className='header-border'>Heading</span> One</h1>
              </div>
              <div>
              <p className='body-section'>
                Remove the duplicates in 2 javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list
                below this paragraph when <a className='p-link' onClick={handleClick}>this link</a> is clicked. if the operation has been completed already, notify thee user that this has already been done. 
                </p>
              </div>
            
            { state.clicked ?
            <div>
              {namesWithoutDups.map((item, index) => {
                return(
                  <div className='nameList' key={index}>{item}</div>
                )
              })}
              </div>: 
            <div>
                </div>}
          </div>        
      )
    }
  }
  
  export default SectionContent