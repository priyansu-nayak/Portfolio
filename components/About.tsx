import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className="h-screen flex flex-col relative 
    text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase 
    tracking-[20px] text-gray-500 text-2xl
    ">
        About
        <motion.img 
          initial={{
            x:-500,
            
          }}
          transition={{
            duration:1.2
          }}
          whileInView={{x:0}}
          // viewport={{once:true}}

        src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg" 
        
        alt="" />

      </h3>

    </div>
  )
}