// import { hover } from '@testing-library/user-event/dist/hover';
import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, 
    HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {

    const [hover, setIsOpen] = useState(false);

    const onHover = () => {
        setIsOpen(!hover);
    }

    return ( 
        
        <HeroContainer>
            <HeroContent>
                <HeroH1 > One Stop Solution to all your Medical Adversities! </HeroH1>
                <HeroP>
                    SignUp today for a healthy tomorrow. Search nearby Doctors and get diagnosed at the comfort of your home. 
                    We deliver Healthcare at your doorsteps.
                </HeroP> 
                <HeroBtnWrapper>
                    <Button to = '/signup' onMouseEnter={onHover} 
                    onMouseLeave={onHover} primary='true' dark='true'> Know More {hover ? < ArrowForward /> : < ArrowRight />}
                    </Button>
                </HeroBtnWrapper> 
            </HeroContent> 
            <HeroBg >
                <VideoBg autoPlay loop muted src = { Video }
                    type = 'video/mp4' />
            </HeroBg>
           
        </HeroContainer>
    );
};

export default HeroSection;