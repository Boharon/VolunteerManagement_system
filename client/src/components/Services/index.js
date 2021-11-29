import React from 'react'
import Icon1 from '../images/svg-1.svg';
import Icon2 from '../images/svg-2.svg';
import Icon3 from '../images/svg-3.svg';
import Phone from '../images/undraw_Mobile_life_re_jtih.svg';
import Email from '../images/undraw_subscribe_vspl.svg';
import Address from '../images/undraw_location_review_dmxd.svg';

import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,
ServicesIcon,ServicesH2,ServicesP,ServicesH22 } from './ServicesElements';


const Services = () => {
    return (
        <ServicesContainer id="contactUs">
            <ServicesH1>Contact Us</ServicesH1>
            <ServicesH22>Wanna hear some more?  We are here for you</ServicesH22>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Phone}/>
                    <ServicesH2>PHONE</ServicesH2>
                    <ServicesP>02-8573421</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Email}/>
                    <ServicesH2>EMAIL</ServicesH2>
                    <ServicesP>doNation@info.com</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Address}/>
                    <ServicesH2>ADDRESS</ServicesH2>
                    <ServicesP>22 Yafo,Jerusalem</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
