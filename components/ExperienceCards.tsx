import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function ExperienceCards({ }: Props) {
    return (
        <article className=''>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}

                whileInView={{
                    opacity: 1, y: 0
                }}
                //viewport={{once:true}}

                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
                src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png" alt="Pic" />

            <div className="px-0 md:px-10">
                <h4 className='text-4xl font-light mt-1 '>CEO of PAPAFAM</h4>
                <p className="font-bold text-2xl">PAPAFAM</p>
                <div className='flex space-x-2 my-2' >
                    <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                    <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />
                    <img className='h-10 w-10 rounded-full' src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png" alt="" />

                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... -Ended...</p>

                <ul className="list-disc space-y-4 ">
                    <li> Summary points</li>
                    <li> Summary points</li>
                    <li> Summary points</li>
                    <li> Summary points</li>
                    <li> Summary points</li>
                </ul>
            </div>

        </article>
    )
}