import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Style from 'style-it';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const [cookies] = useCookies(['color']);
  // const [spotify, setSpotify] = useState(null);

  // useEffect(() => {
  //   axios.get("https://std-api.michaelrosstarr.workers.dev/spotify").then((data) => {
  //     if (data.data) {
  //       setSpotify(data.data);
  //     }
  //   }).catch(() => setSpotify(null))
  // }, [])

  return Style.it(`.link:hover {color: ${cookies.color}} .link:hover::before{background-color: ${cookies.color}} .link::before{background-color: ${cookies.color}}`,
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name' style={{ color: `${cookies.color ? cookies.color : '--clr-primary'}` }}>{name}</span>.
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      {/* {spotify && spotify.is_playing && <>
        <p className='about__desc'>I am currently listneing to <a className="link" href={spotify.item.href}>{spotify.item.name}</a> on <i className="fa-brands fa-spotify fa-xl" style={{ color: '#1DB954' }} /></p>
      </>} */}

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon icon'
                style={{}}
              >
                {/* <GitHubIcon /> */}
                <i className="fa-brands fa-github fa-xl" />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon icon'
              >
                {/* <LinkedInIcon /> */}
                <i className="fa-brands fa-linkedin fa-xl" />
              </a>
            )}

            {social.discord && (
              <a
                href={social.discord}
                aria-label='discord'
                className='link link--icon icon'
              >
                <i className="fa-brands fa-discord fa-xl" />
              </a>
            )}

            {social.spotify && (
              <a
                href={social.spotify}
                aria-label='spotify'
                className='link link--icon icon'
              >
                <i className="fa-brands fa-spotify fa-xl" />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon icon'
              >
                <i className="fa-brands fa-twitter fa-xl" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
