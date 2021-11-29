import React,{useState} from 'react'
import Video from '../../video/pexels-rodnae-productions-6646694.mp4'
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
                <HeroH1>Be a Part of Something Bigger than Yourself</HeroH1>
                <HeroP>
                
                </HeroP>
            <HeroBtnWeapper>
            </HeroBtnWeapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSaction
