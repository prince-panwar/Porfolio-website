"use client"
import { projectData } from './Project_data.js';
import { FaGithub,FaFolder } from 'react-icons/fa';
import {Slide} from 'react-awesome-reveal';
const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
      <Slide  cascade triggerOnce direction='left'>
        {projectData && projectData.map((project) => (
        
          <div className="project-card" key={project.id}>
            <div className="project-header">
            <FaFolder className='fa-regular fa-folder-open folder-icon'/>
              <div className="small-icons">
                <a href={project.gitHubLink}><FaGithub/></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
         
        ))
        }
        </Slide>
      </div>
    </div>
  )
}

export default Projects;