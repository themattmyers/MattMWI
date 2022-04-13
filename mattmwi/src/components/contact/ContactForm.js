import React, {useState} from 'react';
import axios from 'axios'
import './Contact.css'

function ContactForm(){
    {
        const initialValues = {email: "", firstname: "", lastname: "", title: "", message: ""};
        const [formValues, setFormValues] = useState(initialValues);
        let formErrors = {};
        const [err, setErr] = useState({});
        const[isSubmit, setIsSubmit] = useState(false);
        let submit = false;

        const handleChange = e => {
            const{name, value} = e.target;
            setFormValues({...formValues, [name]:value} );
            if(Object.keys(err).length > 0 && !submit){
                setErr(validate(formValues));
            }
        };
        const handleSubmit = (e) => {
            submit = true;
            formErrors = validate(formValues);
            if (Object.keys(formErrors).length === 0 && submit)
            {
                setIsSubmit(true);
                axios.post('http://127.0.0.1:5000/add-contact', formValues)
            } 
            else{
                submit = false;
                setErr(validate(formValues));
            }     
            e.preventDefault();   
        }

        const validate = (values) =>
        {
            const errors = {};
            if (!values.email){
                errors.email = "Required";
            }
            else if (!values.email.includes('@') || !values.email.includes('.')){
                errors.email = "Email not Valid"
            }
            return errors;
        }
        
      return(
        <div className='contact-margin'>
        <h1 className='contact-header'>Heading Two</h1>         
            <div className='container'>
                {Object.keys(err).length === 0 && isSubmit ? (<div className='ui message success'>Contact Submitted</div>) : 
                    (<form method='POST' onSubmit={(e) =>handleSubmit(e)} action="http://127.0.0.1:5000/add-contact"  >
                    <div className="input-container">
                        <input type="text" name="firstname" placeholder='First Name' onChange={handleChange}/>      
                        <label>First Name</label>          
                    </div>          
                    <div className="input-container">
                        <input type="text" name="lastname" placeholder='Last Name' onChange={handleChange}/>      
                        <label>Last Name</label>          
                    </div>  
                    <div className="input-container">
                        <input type="text" name="title" placeholder='Title' onChange={handleChange}/>      
                        <label>Title</label>          
                    </div>  
                    <div className='input-container'>
                        <input className={err.email}type="text" name="email" placeholder='Email' value={formValues.email} onChange={handleChange}/>      
                        <label>Email</label> 
                        <label className= {(!err.email ? 'validation' : 'validation-show')}>{err.email}</label>         
                    </div>            
                    <div className="input-container message-area">
                        <textarea type="text" name="message" placeholder='Message' onChange={handleChange}/>      
                        <label>Message</label>          
                    </div>  
                    <div className='contact-submit'>
                    <button type="submit" className='contact-button' onClick={handleSubmit}> Submit </button>
                    </div>
                </form>)}            
            </div>     
        </div>
      )
    }
  }
  
  export default ContactForm