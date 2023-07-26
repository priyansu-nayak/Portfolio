import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1.5
    }}
    
    
    className="h-screen flex flex-col relative 
    text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase 
    tracking-[20px] text-gray-500 text-2xl
    ">
        About
      </h3>

      <motion.img
        initial={{
          x: -100,
          opacity: 0
        }}

        transition={{
          duration: 1.2
        }}

        whileInView={{ x: 0, opacity: 1 }}
        viewport={{once:true}}

        src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]   "
        alt="" />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className='text-4xl font-semibold ' >Here's a <span className='underline decoration-[#F7AB0A]/50'>little</span>  background</h4>
        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero officia quae cumque pariatur aperiam dolorum eaque quibusdam consequatur distinctio voluptates enim nesciunt sint magnam placeat, eum, nostrum velit nihil hic at rerum doloribus. Optio eius ab hic sunt odio.</p>
      </div>


    </motion.div>
  )
}