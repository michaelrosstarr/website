import uniqid from 'uniqid'
import Style from 'style-it';
import { useCookies } from 'react-cookie';
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const [cookies] = useCookies(['color']);
  if (!projects.length) return null

  return Style.it(`.link:hover {color: ${cookies.color}} .link:hover::before{background-color: ${cookies.color}} .link::before{background-color: ${cookies.color}}`,
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
