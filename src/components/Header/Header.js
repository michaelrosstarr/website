import { useCookies } from 'react-cookie';
import Style from 'style-it';
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const [cookies] = useCookies(['color']);
  return Style.it(`.link:hover {color: ${cookies.color}} .link:hover::before{background-color: ${cookies.color}} .link::before{background-color: ${cookies.color}}`,
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
