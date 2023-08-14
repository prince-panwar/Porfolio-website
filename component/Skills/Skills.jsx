"use client"
import {FaJava,FaReact,FaNode ,FaJs, FaGithub} from "react-icons/fa";
import{SiSolidity,SiFirebase,SiExpress ,SiMongodb} from "react-icons/si";
import { Zoom } from "react-awesome-reveal";
const Skills = () => {
    return (
    
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
        <Zoom triggerOnce cascade direction="left">
          <div className="skill-card Solidity">
          <SiSolidity/>
            <p>Solidity</p>
          </div>
        <div className="skill-card js">
            <FaJs/>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <FaReact/>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <FaNode/>
            <p>Node</p>
          </div>
          <div className="skill-card java">
            <FaJava/>
            <p>Java</p>
          </div>
          <div className="skill-card Github">
            <FaGithub/>
            <p>GitHub</p>
          </div>
          <div className="skill-card Firebase">
        <SiFirebase/>
            <p>Firebase</p>
          </div>
          <div className="skill-card Firebase">
        <SiMongodb/>
            <p>Mongodb</p>
          </div>
          <div className="skill-card Blockchain">
        <SiMongodb/>
            <p>Blockchain</p>
          </div>
          <div className="skill-card Express">
        <SiExpress/>
            <p>Express</p>
          </div>
          </Zoom>
        </div>
      </div>
    
    )
  }
  
  export default Skills;