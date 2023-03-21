import { useContext, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Style from 'style-it';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [cookies, setCookie] = useCookies(['color']);

  useEffect(() => {
    console.log(cookies.color);
    if (!cookies.color) {
      setCookie('color', '#3a86ff');
    }
  }, [])

  return Style.it(`::selection, ::-moz-selection {color: var(--clr-dark);background-color: ${cookies.color};}`,
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
