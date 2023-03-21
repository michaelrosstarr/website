import { useContext, useState } from 'react'
import { useCookies } from 'react-cookie';
import Style from 'style-it';
import Circle from '@uiw/react-color-circle';
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import 'animate.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showColorList, setColorList] = useState(false);
  const [colorAnimate, setColorAniamte] = useState("animate__fadeInDown");
  const [showNavList, setShowNavList] = useState(false)
  const [cookies, setCookie] = useCookies(['color']);
  const colors = ['#ff0000', '#ff8700', '#ffd300', '#deff0a', '#a1ff0a', '#0aff99', '#0aefff', '#147df5', '#580aff', '#be0aff'];

  const toggleNavList = () => setShowNavList(!showNavList)

  const closeModal = () => {
    setColorAniamte("animate__fadeOutUp")
    setTimeout(() => {
      setColorList(false);
      setColorAniamte("animate__fadeInDown")
    }, 800)
  }

  return Style.it(`.btn--icon:hover, .btn--icon:focus {color: ${cookies.color}}`,
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      {/* eslint-disable   */}
      {showColorList &&
        <>
          {/* eslint-disable   */}
          <div className='modal-backdrop' onClick={() => closeModal()}></div>
          {/* // eslint-disable */}
          <div className={`color__selector__div animate__animated animate__fast ${colorAnimate}`} style={{ position: "fixed", top: 0, right: 0, borderBottom: `2px ${cookies.color} solid` }} onClick={() => closeModal()}>
            {/* eslint-disable   */}
            <div className="inner__color_selector" onClick={e => e.stopPropagation()}>
              <Circle
                colors={colors}
                color={cookies.color}
                onChange={(color) => {
                  setCookie('color', color.hex);
                  closeModal()
                }}
              />
            </div>
          </div>
        </>

      }

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <i className="fa-solid fa-sun fa-xl" /> : <i className="fa-solid fa-moon fa-xl" />}
      </button>

      {/* eslint-disable */}
      <div className="color__selector" onClick={() => { setColorList(!showColorList) }} style={{
        width: 28, height: 28, backgroundColor: cookies.color, borderRadius: '50%'
      }} />

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <i className="fa-solid fa-xmark fa-xl" /> : <i className="fa-solid fa-bars fa-xl" />}
      </button>
    </nav >
  )
}

export default Navbar
