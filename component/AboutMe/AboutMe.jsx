import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
         I am a BE CSE (Computer Science and Engineering) student from India. I have a deep passion for web development, specifically using the MERN (MongoDB, Express, React, Node.js) stack. Currently, I am actively learning and expanding my skills in this area.
         Apart from web development, I also have a keen interest in blockchain development. The decentralized nature and potential applications of blockchain technology fascinate me, and I am eager to explore this field further.
         Open source software development is another area that greatly interests me. I believe in the power of collaboration and the community-driven approach of open source projects. I have already made contributions to a few open source projects, which have allowed me to learn from experienced developers and contribute to the growth of the open source community..
          </p>
          <p>My ultimate goal is to pursue a career as a software developer. I am driven by the desire to create innovative and impactful solutions through software development. I am constantly seeking new challenges and opportunities to enhance my skills and knowledge in this field.
             I am excited about the future of technology and the endless possibilities it holds. With a strong foundation in web development, a growing interest in blockchain, and my passion for open source, I am ready to embark on a fulfilling career journey as a software developer.
            Thank you for taking the time to learn more about me. I look forward to connecting with like-minded individuals and exploring new avenues in the world of software development</p>
        </div>
        <div className="about-img">
          <Image src='/aboutMe.jpg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;