import { useCookies } from 'react-cookie';
import Style from 'style-it';
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const [cookies] = useCookies(['color']);

  return Style.it(`.btn--outline {border: 2px solid ${cookies.color}} .btn--outline:before{background-color: ${cookies.color};`,
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
