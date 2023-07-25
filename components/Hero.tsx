import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link'
// import BackgroundCircles from '@/components/BackgroundCircles'
import Dp from "D:/Builds/portfolio-yt-2.0/Dp.jpg"
type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Priyansu",
            "Guy who loves Coffee",
            "<But Loves to Code More>"
        ],
        loop: true,
        delaySpeed: 1300,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <img className="rounded-full relative w-36 h-36 mx-auto my-auto object-cover "
                src="https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png" alt="Profile Picture" />

            <div className='z-20'>
                <h2 className=" tracking-[8px] text-sm uppercase text-gray-500 pb-2">
                    Software Developer
                </h2>

                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>

                <div>
                    <Link href="#About">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#Experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#Skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#Projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>

            </div>

        </div>

    )
}