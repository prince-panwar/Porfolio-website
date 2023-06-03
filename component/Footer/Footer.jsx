import React from 'react';
import { FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    return (
      <div>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Prince's Portfolio
          </p>
          <div className="social_icons">
            <a
              href="https://twitter.com/_Prince_panwar_"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter/>
            </a>
            <a
              href="https://github.com/prince-panwar"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/prince-panwar-41a672223/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
          <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer;