import Svg1 from '../images/ABOUT+MISSION/1.svg';
import Svg2 from '../images/ABOUT+MISSION/2.svg';
export const homeObjOne={
    id: 'about',
    btnTo:'/newAdult',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'ABOUT US',
    headline: '',
    description: 'DoNation is a humanitarian organization that is committed to improving the quality of life for solitary adults in Israel. Our goals are accomplished by helping to provide regular feeding and humanitarian aid and medical supplies. DoNation also places a high importance on providing spiritual support as well as physical care.',
    buttonLabel:'Get started',
    imgStart:false,
    img: Svg1,
    dark:true,
    primary:true,
    darkText:false,
    isHome:true
}

export const homeObjTwo={
    id: 'ourMission',
    btnTo:'/newAdult',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'WE ARE ON A MISSION',
    headline: '',
    description: 'DoNation reaches out to lonely, homeless adults all over Israel by providing food, clothing, and humanitarian aid. You can be a part of helping and healing these forgotten and hurting adults.',
    buttonLabel:'Learn More',
    imgStart:true,
    img: Svg2,
    dark:false,
    primary:false,
    darkText:true,
    isHome:true
}
/*
export const homeObjThree={
    id: 'contactUs',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'here the description',
    buttonLabel:'Get started',
    imgStart:false,
    img: Svg3,
    dark:true,
    primary:true,
    darkText:false
}*/

