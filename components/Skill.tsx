import { motion } from 'framer-motion'
import React from 'react'

type Props = {

    directionLeft?: boolean;

};

export default function Skill({directionLeft }: Props) {
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

                src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png" alt="SKill" />
        </div>
    )
}

