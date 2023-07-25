import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
// import BackgroundCircles from '@/components/BackgroundCircles'

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
            <BackgroundCircles/>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'></Cursor>
            </h1>
        </div>

    )
}