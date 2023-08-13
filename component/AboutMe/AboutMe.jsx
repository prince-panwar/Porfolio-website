"use client"
import React from 'react';
import Image from "next/image";
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <Fade direction="left">
          <div className="about-text">
            <p>
              I am a BE CSE (Computer Science and Engineering) student from India. I have a deep passion for web development, specifically using the MERN (MongoDB, Express, React, Node.js) stack. Currently, I am actively learning and expanding my skills in this area.
              Apart from web development, I also have a keen interest in blockchain development. The decentralized nature and potential applications of blockchain technology fascinate me, and I am eager to explore this field further.
              Open source software development is another area that greatly interests me. I believe in the power of collaboration and the community-driven approach of open source projects. I have already made contributions to a few open source projects, which have allowed me to learn from experienced developers and contribute to the growth of the open source community.
            </p>
            
          </div>
        </Fade>
        <Fade direction="right">
          <div className="about-img">
            <Image src='/aboutMe.jpg' className="profile-img" width={300} height={500} />
         </div>
        </Fade>
      </div>
    </div>
  )
}

export default About;
