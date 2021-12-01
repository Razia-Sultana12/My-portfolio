import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm('service_hcyb64b','template_l1u5m4o',e.target,'user_AbGIw0TmSIjM0Sp1vQudJ').then(res=>{
            console.log(res);
            alert('Thanks for contact me!');
            
        }).catch(err=>console.log(err));
        
        e.target.reset();
    }
    return (
        <div>
           <h1 className='text-center my-3'>Contact Me</h1> 
           <form onSubmit={sendEmail} className='mx-auto text-center'>
           
    
    <input type="text" placeholder='Your name' name='name' className='w-75 form-control mx-auto' required />
    
    <input type="email" placeholder='Email' name='user_email' className='mx-auto w-75 form-control my-3 ' required />
    
    <textarea name="message" placeholder='Type your message here' rows='4' className='mx-auto w-75 form-control' required></textarea>
    <input className='btn btn-primary mt-3 fw-bold' type="submit" value="Send" />
       
   
  
  
</form>
        </div>
    );
};

export default Contact;