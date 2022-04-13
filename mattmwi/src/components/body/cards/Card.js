import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Card.css'
import { CardItems } from './CardItems';  
import { CardIcons } from './CardIcons';  

function Card()
{
    // const url = 'https://api.mwi.dev/content/home'
    const url = 'http://127.0.0.1:5000/cards';
    const [card, setCards] = useState(null)

    useEffect(() => {
      axios.get(url)
      .then(response =>{
        console.log('Got the data')
          setCards(response.data)
      })
    }, [url])

    if (card)
    { 
        return(         
                <ul className='cards'>    
                {card.map((item, index) =>{
                    return (
                    <li key={item.id} className='cards-item'>
                      <div className='card'>
                                {index < CardIcons.length ?
                             (<div className='card-image' >
                                 <img src={CardIcons[index].source} alt='HI'/>
                            </div>) : ("")                             
                             } 
                        <div className='card-content'>
                          <h2 className='card-title'>{item.title} </h2>
                          <p className='card-text'>{item.content}</p>
                          <div className='card-button-container'>
                                         {CardItems.map((citem,cindex) =>{
                                 return (
                                         <button className={citem.className} key={cindex}>{citem.title}</button>
                                     )
                                     })}
                          </div>
                        </div>
                      </div>
                    </li>                
                    )
                })}   
                </ul> 
        )       
    }
    else{
        console.log('no cards found');
        return(
             <div className='cardno'>
              Nothing found
             </div>
        )
    }
}
export default Card