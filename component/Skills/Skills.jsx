import {FaHtml5,FaJava,FaReact,FaNode,FaCss3,FaJs, FaGithub} from "react-icons/fa";
import{SiFirebase} from "react-icons/si";
const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
          <FaHtml5/>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <FaCss3/>
            <p>CSS</p>
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
        </div>
      </div>
    )
  }
  
  export default Skills;