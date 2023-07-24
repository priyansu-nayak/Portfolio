import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header>
            <div className="flex flex-row {/*justify-evenly*/} items-center">
                {/* Social Icons */}
                {/* react social icons library 
            
            https://jaketrent.github.io/react-social-icons/
            
            */}
                {/* <SocialIcon network="twitter" fgColor="" /> */}
                {/* <SocialIcon url="https://twitter.com/PriyansuNayak18" fgColor="gray" bgColor="transparent" /> */}
                <SocialIcon url="https://youtube.com/priyansu-nayak" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://twitter.com/priyansu-nayak" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://github.com/priyansu-nayak" fgColor="gray" bgColor="transparent" />
                                
            </div>
            <div>
                <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent"/>
                <p className="uppercase">Get in Touch</p>
            </div>

        </header>
    )
}

