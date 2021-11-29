import React from 'react'
import { InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,
    Subtitle,BtnWrap,ImgWrap,Img,PageRoute} from './infoElementPage';
import { Button } from '../ButtonElement';
import NewDeliveryMan from '../NewDeliveryMan'
import D2 from '../images/zaken+mehalek+haluka/D2.svg'
export const homeObjOne={
    id: 'newAdult',
    btnTo:'/newAdult',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine:'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'here the description',
    buttonLabel:'Get started',
    imgStart:false,
    img: D2,
    dark:true,
    primary:true,
    darkText:false
}

const NewDeliveryManPage = () => {
    return (
        <>
            <InfoContainer lightBg={homeObjOne.lightBg} id={homeObjOne.id}>
                <InfoWrapper>
                    <InfoRow imgStart={homeObjOne.imgStart}>
                        <Column1>
                        <TextWrapper>
                          <NewDeliveryMan/>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={homeObjOne.img} alt={homeObjOne.alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default NewDeliveryManPage
