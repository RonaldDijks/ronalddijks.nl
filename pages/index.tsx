import React from 'react'
import Image from 'next/image'
import imageSource from '../assets/me.jpg'
import Header from '../components/Header'

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
  return <a className='underline' href={href}>{children}</a>
}

const IndexPage: React.FC = () => {
  return <div>
    <Header lastListened={{ artist: 'Meshuggah', song: 'Bleed', link: 'https://www.last.fm' }} />
    <div className='max-w-3xl mx-auto'>
      <section className='py-40'>
        <div className="flex">
          <div className='max-w-xs'>
            <Image
              className='rounded-lg'
              src={imageSource}
              alt="Headshot of Ronald Dijks"
            />
          </div>
          <div className="ml-8">
            <h1 className='text-2xl font-bold mb-2'>Hi, I'm Ronald.</h1>
            <p className='mb-4'>I'm a software developer from Amsterdam. I work at Crisp as a fullstack developer, and I run Essential Audio with two of my friends.</p>
            <p className='mb-4'>You can find me on <Link href="https://github.com/RonaldDijks">GitHub</Link>, <Link href="https://www.linkedin.com/in/ronalddijks/">LinkedIn</Link> and <Link href="https://twitter.com/Ronald_Dijks">Twitter</Link>.</p>
            <p className='mb-4'>I'm also available for hire as a fullstack freelancer, if you have any fun projects, shoot me a message!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
}

export default IndexPage