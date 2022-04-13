import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar'; 
import Home from './components/home/Home'
import Contact from './components/contact/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='App-container'>
          <div className='App-content'>
          <Router>
            <NavBar/>          
              <Routes>
                <Route path='/Contact' element={<Contact/>}/>   
                <Route path='/' element={<Home/>}/>
              </Routes>
            </Router>
          </div>       
        </div>
      </div>
    );
  }

}


