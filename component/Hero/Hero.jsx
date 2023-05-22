import Image from "next/image";
import { FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa';
const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/Prince.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Prince 👋</h1>
        <p>
          I'm a software developer based in India. I specialize in building web applications.
        </p>
        <div className="social-icons">
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

export default Hero;