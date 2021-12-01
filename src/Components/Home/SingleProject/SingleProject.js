import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const SingleProject = () => {
    const {projectId}=useParams();
    
    const [singleProject,setSingleProject] = useState([]);
    useEffect(()=>{
        fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setSingleProject(data));
    },[]);
    if(!singleProject){
        <div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    }
    console.log(singleProject);
    const foundProject=singleProject.find(data=>data.id==projectId);
    console.log(foundProject);
    let title,img1,img2,img3,details,livelink;
    if(foundProject){
        ({title,img1,img2,img3,livelink,details}=foundProject);
        console.log(foundProject);
    }
    return (
      <div>
      
        <div className="container">
            <div class="card mb-3">
                <h2 className="text-center my-5 color">{title}</h2>
  <div class="row g-0">
    <div class="col-md-4">
      <h5 className='color'>Homepage  </h5>
      <img src={img1} class="img-fluid rounded-start" alt="..."/>
      
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title my-3 color">About This Project</h5>
        <p class="card-text">{details}</p>
       <button className="btn btn-sm btn-light  fw-bold"><a href={livelink} target="_blank" >LiveSite</a></button>
       <br/>
        <img src={img2} class="img-fluid rounded-start my-3" alt="..."/>
        
        <img src={img3} class="img-fluid rounded-start my-5" alt="..."/>
        
        
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default SingleProject;