import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setProjects(data));
    },[])
    return (
        <div className="container my-5 text-center">
            <h2 className='my-5 color'>My Recent Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            
            {
                projects.map(project=><Project project={project}
                key={project.id}></Project>)
            }
        </div>
        </div>
        
    );
};

export default Projects;