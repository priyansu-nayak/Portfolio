import React from 'react'

type Props = {}

export default function ContactMe({ }: Props) {
    return (
        <div className='h-screen flex flex-col items-center relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto '>
            <h3 className='absolute top-24 text-gray-500 tracking-[20px] uppercase  '>
                Contact
            </h3>

            <div className=" flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline ">Lets Talk</span>
                </h4>

                <div>

                </div>
            </div>

        </div>
    )
}