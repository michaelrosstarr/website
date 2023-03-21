import { useCookies } from 'react-cookie';
import Style from 'style-it';
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const [cookies] = useCookies(['color']);
  if (!skills.length) return null

  return Style.it(`.btn--plain{background-color: ${cookies.color}}`,
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
