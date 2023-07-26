import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from './ExperienceCards'

type Props = {}

export default function Experience({ }: Props) {
    return (
        <motion.div

            initial={{
                opacity: 0,

            }}
            
            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1.5
            }}





            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full px-10 justify-evenly mx-auto items-center' >
            <h3 className='  absolute top-24 uppercase 
    tracking-[20px] text-gray-500 text-2xl
    ' >Experience</h3>

            <div className='mt-36 p-10 snap-mandatory snap-x  w-full flex space-x-5 overflow-x-scroll '>
                <ExperienceCards/>
                <ExperienceCards/>
                <ExperienceCards/>
                <ExperienceCards/>
            </div>

        </motion.div>
    )
}