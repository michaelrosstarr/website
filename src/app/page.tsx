import config from '../config.json';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItem, StackItem } from '@std/utils/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { getProjects } from '@std/utils/notion';
import NavBar from '@std/components/Navbar';
import BackToTop from '@std/components/BackToTop';
import Snow from '@std/components/Snow';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div className='bg-background min-h-screen' id="top">
      <Snow />
      <div className='max-w-6xl m-auto p-5'>
        <NavBar />
        <main className='mt-20 space-y-10 md:space-y-32'>
          <section id='about' className='space-y-8'>
            <div className='space-y-3'>
              <h1 className='font-bold text-5xl text-text text-center'>👋, I'm <span className='text-primary'>{config.about.title}</span></h1>
              <h2 className='font-medium text-3xl text-text text-center'>{config.about.subtitle}</h2>
            </div>
            <p id='description' className='text-text text-center text-lg md:m-5'>{config.about.description}</p>
            <div id='socials' className='flex gap-5 justify-center items-center'>
              {config.about.social?.spotify && <Link href={config.about.social.spotify} className='text-text hover:text-social-spotify duration-100 hover:-translate-y-1'><FontAwesomeIcon icon={faSpotify} className='w-8 h-8' /></Link>}
              {config.about.social?.github && <Link href={config.about.social.github} className='text-text hover:text-social-github duration-100 hover:-translate-y-1'><FontAwesomeIcon icon={faGithub} className='w-8 h-8' /></Link>}
              {config.about.social?.linkedin && <Link href={config.about.social.linkedin} className='text-text hover:text-social-linkedin duration-100 hover:-translate-y-1'><FontAwesomeIcon icon={faLinkedin} className='w-8 h-8' /></Link>}
              {config.about.social?.twitter && <Link href={config.about.social.twitter} className='text-text hover:text-social-twitter duration-100 hover:-translate-y-1'><FontAwesomeIcon icon={faXTwitter} className='w-8 h-8' /></Link>}
            </div>
          </section>
          <section id='projects' className='space-y-5'>
            <h3 className='font-semibold text-4xl text-text text-center'>{config.projects.title}</h3>
            <p id='description' className='text-text text-center text-lg md:m-5'>{config.projects?.description}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
              {projects.map((item: ProjectItem, index: number) => <div className='p-5 md:p-10 space-y-4 shadow hover:-translate-y-1 duration-100 rounded-lg flex items-between justify-between flex-col bg-cardBackground border-2 border-cardBackground hover:border-primary' key={index}>
                <div>
                  <h4 className='text-text text-center text-2xl font-semibold'>{item.name}</h4>
                  <p className='text-text text-center text-lg line-clamp-3'>{item.description}</p>
                </div>
                <div className='space-y-3'>
                  <div className='flex gap-2 text-text text-sm justify-center flex-wrap'>
                    {item.stack.map((stack: string, stackIndex: number) => <span key={stackIndex} className='bg-background px-2 py-1 rounded-lg'>{stack}</span>)}
                  </div>
                  <div className='flex gap-5 justify-end'>
                    <Link href={item.link} className='text-text hover:text-primary flex items-center gap-2'>Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='w-4 h-4' /></Link>
                    <Link href={`/project/${item.id}`} prefetch={true} className='text-text hover:text-primary flex items-center gap-1'>Read more <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' /></Link>
                  </div>
                </div>
              </div>)}
            </div>
          </section>
          <section id='stack' className='space-y-5'>
            <h3 className='font-semibold text-4xl text-text text-center'>{config.stack.title}</h3>
            <p id='description' className='text-text text-center text-lg md:m-5'>{config.stack?.description}</p>
            <div className='flex flex-row gap-3 items-center justify-center flex-wrap'>
              {config.stack.technology.map((item: StackItem, index: number) => <Link href={item.link} key={index}>
                <Image src={item.image} alt={`Icon for ${item.name}`} width={48} height={48} className='hover:-translate-y-1.5 duration-100' />
              </Link>)}
            </div>
          </section>
          <section id='contact'>
            <div className='flex gap-5 justify-center items-center flex-col'>
              <Link href={`mailto:${config.contact.email.address}`} className='text-text hover:text-primary text-lg flex items-center gap-2'>{config.contact.email.text}</Link>
            </div>
          </section>
        </main>
      </div>
      <BackToTop />
      <div id='spotify' className='static md:fixed flex justify-center items-center bottom-5 left-5'>
        <img src={config.about.spotify} alt='Spotify Now Playing' width={250} height={375} />
      </div>
    </div>
  )
}
