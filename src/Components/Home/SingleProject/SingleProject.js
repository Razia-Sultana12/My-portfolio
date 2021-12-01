import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    const foundProject=singleProject.find(data=>data.id===projectId);
    console.log(foundProject);
    let title,img,details;
    if(foundProject){
        ({title,img,details}=foundProject);
        console.log(foundProject);
    }
    return (
        <div>
            <div class="card mb-3">
                <h1>Details {title}</h1>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}{details}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProject;