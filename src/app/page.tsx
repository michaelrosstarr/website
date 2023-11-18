import config from '../config.json';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem, ProjectItem, StackItem } from '@std/utils/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faGithub, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { getProjects } from '@std/utils/notion';
import { cookies } from 'next/headers';

export default async function Home() {

  const cookieStore = cookies();
  const projects = await getProjects();

  return (
    <div className='bg-background min-h-screen' id="top">
      <div className='max-w-6xl m-auto p-5'>
        <nav className='flex justify-between items-center'>
          <Link href='/' className='text-4xl text-text font-bold'>MRT</Link>
          <div className='md:flex items-center gap-5 hidden'>
            {
              config.nav.map((item: NavItem, index: number) => <Link key={index} href={item.href} className='text-xl text-text duration-75 hover:text-primary'>{item.name}</Link>)
            }
          </div>
          <div className='md:hidden block'>
            <Link href='#mobile-nav' className='text-text'><FontAwesomeIcon icon={faBars} className='w-8 h-8' /></Link>
          </div>
        </nav>
        <main className='mt-20 space-y-10 md:space-y-32'>
          <section id='about' className='space-y-8'>
            <div className='space-y-3'>
              <h1 className='font-bold text-5xl text-text text-center'>👋, I'm <span className='text-primary'>{config.about.title}</span></h1>
              <h2 className='font-medium text-3xl text-text text-center'>{config.about.subtitle}</h2>
            </div>
            <p id='description' className='text-text text-center text-lg md:m-5'>{config.about.description}</p>
            <div id='socials' className='flex gap-5 justify-center items-center'>
              <Link href={config.about.social.spotify} className='text-text hover:text-social-spotify duration-100'><FontAwesomeIcon icon={faSpotify} className='w-8 h-8' /></Link>
              <Link href={config.about.social.github} className='text-text hover:text-social-github duration-100'><FontAwesomeIcon icon={faGithub} className='w-8 h-8' /></Link>
              <Link href={config.about.social.linkedin} className='text-text hover:text-social-linkedin duration-100'><FontAwesomeIcon icon={faLinkedin} className='w-8 h-8' /></Link>
              <Link href={config.about.social.twitter} className='text-text hover:text-social-twitter duration-100'><FontAwesomeIcon icon={faXTwitter} className='w-8 h-8' /></Link>
              <Link href={config.about.social.youtube} className='text-text hover:text-social-youtube duration-100'><FontAwesomeIcon icon={faYoutube} className='w-10 h-10' /></Link>
            </div>
          </section>
          <section id='projects' className='space-y-5'>
            <h3 className='font-semibold text-4xl text-text text-center'>my Projects</h3>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
              {projects.map((item: ProjectItem, index: number) => <div className='bg-cardBackground p-5 md:p-10 space-y-4 shadow hover:-translate-y-1 duration-200 rounded-lg flex items-between justify-between flex-col' key={index}>
                <div>
                  <h4 className='text-text text-center text-2xl font-semibold'>{item.name}</h4>
                  <p className='text-text text-center text-lg line-clamp-3'>{item.description}</p>
                </div>
                <div className='space-y-3'>
                  <div className='flex gap-2 text-text text-sm justify-center flex-wrap'>
                    {item.stack.map((stack: string, stackIndex: number) => <span key={stackIndex}>{stack}</span>)}
                  </div>
                  <div className='flex gap-5 justify-end'>
                    <Link href={item.link} className='text-text hover:text-primary flex items-center gap-2'>Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='w-4 h-4' /></Link>
                    <Link href={`/project/${item.id}`} className='text-text hover:text-primary flex items-center gap-1'>Read more <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' /></Link>
                  </div>
                </div>
              </div>)}
            </div>
          </section>
          <section id='stack' className='space-y-5'>
            <h3 className='font-semibold text-4xl text-text text-center'>my Stack</h3>
            <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
              {config.stack.map((item: StackItem, index: number) => <Link href={item.link} key={index}>
                <Image src={item.image} alt={`Icon for ${item.name}`} width={48} height={48} />
              </Link>)}
            </div>
          </section>
          <section id='contact'>
            <div className='flex gap-5 justify-center'>
              <Link href={`mailto:${config.contact.email.address}`} className='text-text hover:text-primary text-lg flex items-center gap-2'>{config.contact.email.text}</Link>
            </div>
          </section>
          <nav id='mobile-nav' className='flex justify-center md:hidden text-text flex-col items-center gap-5'>
            {
              config.nav.map((item: NavItem, index: number) => <Link key={index} href={item.href} className='text-xl text-text duration-75 hover:text-primary'>{item.name}</Link>)
            }
            <Link href='#top' className='text-xl text-text duration-75 hover:text-primary'>back to the top</Link>
          </nav>
        </main>
      </div>
    </div>
  )
}
