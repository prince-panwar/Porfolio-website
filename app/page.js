import Hero from "../component/Hero/Hero"
import AboutMe from "../component/AboutMe/AboutMe"
import Skills from "@/component/Skills/Skills"
import Projects from "@/component/project/project"
import Navbar from "@/component/Navbar/Navbar"
import Footer from "@/component/Footer/Footer"
import "./globals.css"
export default function Home() {
  return (
   <div>
    <Navbar/>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Footer/>
   </div>
  );
}
