import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'


// import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white 
    h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">
      <Head>
        <title>Priyansu's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="About" className='snap-center'>
        <About />
      </section>

      <section id="Experience" className='snap-center'>
        <Experience />
      </section>

      <section id="Skills" className='snap-start'>
        <Skills />
      </section>


      <section id="Projects" className="snap-start">
        <Projects />
      </section>

      <section id="Contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className="">
            <img className="h-10 w-10 rounded-full
            grayscale hover:grayscale-0 cursor-pointer
            filter " src="https://i.imgur.com/e2yvD6A.png" alt="" />
          </div>
        </footer>
      </Link>



    </div>
  )
}
