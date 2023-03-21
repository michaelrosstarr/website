import { useCookies } from 'react-cookie';
import Style from 'style-it';
import './Footer.css'

const Footer = () => {
  const [cookies] = useCookies(['color']);
  return Style.it(`.link:hover {color: ${cookies.color}} .link:hover::before{background-color: ${cookies.color}} .link::before{background-color: ${cookies.color}}`,
    <footer className='footer'>
      <a
        href='https://github.com/michaelrosstarr'
        className='link footer__link'
      >
        Created By Sloth the Dev
      </a>
    </footer>
  )
}

export default Footer
