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
        <div className="animate__animated animate__zoomIn">
           <h1 className='text-center my-3 color'>Contact Me</h1> 
           <form onSubmit={sendEmail} className='mx-auto text-center'>
           
    
    <input type="text" placeholder='Your name' name='name' className='w-75 form-control mx-auto' required />
    
    <input type="email" placeholder='Email' name='user_email' className='mx-auto w-75 form-control my-3 ' required />
    
    <textarea name="message" placeholder='Type your message here' rows='4' className='mx-auto w-75 form-control' required></textarea>
    <input className='btn resume mt-3 fw-bold' type="submit" value="Send" />
    <br/>
    <h3 className="text-center m-3 color">Follow Me On</h3>
    <a href="https://github.com/Razia-Sultana12?tab=repositories" target="_blank"><i class="fab fa-github fs-1 text-dark"></i></a>
    <a href="www.linkedin.com/in/razia-sultana-mun" target="_blank"><i class="fab fa-linkedin mx-3 fs-1"></i></a>
    <a href="https://www.facebook.com/razia.suntana.mun" target="_blank"><i class="fab fa-facebook fs-1"></i></a>
    
    
    
    
       
   
  
  
</form>
        </div>
    );
};

export default Contact;