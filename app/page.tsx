import AboutMe from '@/components/AboutMe/aboutMe';
import ProjectShowcase from '@/components/ProjectShowcase/projectShowcase';
import CodingSkills from '@/components/CodingSkills/codingSkills';
import Ascii3D from '@/components/Ascii3D';

export default function Home() {
  return (
    <main>
      <AboutMe />

      <CodingSkills />
      
      <ProjectShowcase />

      <Ascii3D />
    </main>
  )
}
