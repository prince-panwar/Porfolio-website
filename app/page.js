import Hero from "../component/Hero/Hero"
import AboutMe from "../component/AboutMe/AboutMe"
import Skills from "@/component/Skills/Skills"
import Projects from "@/component/project/project"

export default function Home() {
  return (
   <div>
     <Hero/>
     <AboutMe/>
     <Skills/>
     <Projects/>
   </div>
  );
}
