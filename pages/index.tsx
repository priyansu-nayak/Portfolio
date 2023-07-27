import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'


// import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white 
    h-screen snap-y 
    snap-mandatory overflow-scroll z-0">
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

      {/* Contact Me */}





    </div>
  )
}
