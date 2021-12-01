import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
    console.log(props);
    const {id,img,title} = props.project;
    return (
        <div>
            
            <div class="col">
            <div class="card text-center h-100 animate__animated animate__zoomIn">
            
     <img src={img} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <Link to={`/singleProject/${id}`}><button className='btn-sm btn-primary'>Explore More</button></Link>
    
    </div>
    </div>
    
 
  
</div>
        </div>
        
        
    );
};

export default Project;