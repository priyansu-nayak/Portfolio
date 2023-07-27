import { motion } from 'framer-motion'
import React from 'react'

type Props = {

    directionLeft?: boolean;

};

export default function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={
                    {
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }
                }

                transition={{
                    duration: 1
                }}

                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"

                alt="Skill"

                className='rounded-full border border-gray-500 object-cover w-12 h-12 xl:w-32 xl:h-32
                 filter group-hover:grayscale transition duration-1000 ease-in-out md:w-28 md:h-28'
            />
            <div className="absolute opacity-0 group-hover:opacity-70 transition duration-1000 
            ease-in-out group-hover:bg-white  h-12 w-12 rounded-full z-0
            md:w-28 md:h-28 xl:h-32 xl:w-32 
            ">
                <div className='flex items-center justify-center h-full' >
                    <p className="text-xl font-bold text-black opacity-100">
                        100%
                    </p>
                </div>
            </div>
        </div>
    )
}

