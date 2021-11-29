import React,{useState} from 'react'
import Video from '../../video/pexels-c-technical-6590938.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroH1,HeroContent,HeroP,HeroBtnWeapper,ArrowForward,ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSaction = () => {
    const [hover,setHover]=useState(false)

    const onHover=()=>
    {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Small acts ,when multiplied by millions of people- can transform the world.</HeroH1>
                <HeroP>
                Let's be a part of our community
                </HeroP>
            <HeroBtnWeapper>
            </HeroBtnWeapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSaction
