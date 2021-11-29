import Svg1 from '../images/svg-1.svg';
import Svg2 from '../images/svg-2.svg';
import Svg3 from '../images/svg-3.svg';
import DeliveryMan from '../images/zaken+mehalek+haluka/deliveryMan.svg'
import adultout from '../images/zaken+mehalek+haluka/adultout.svg'
import Delivery from '../images/zaken+mehalek+haluka/undraw_deliveries_131a.svg'
import Graph from '../images/graph/undraw_Data_trends_re_2cdy.svg'
import Blog from '../images/blogg/3.svg'
export const homeObjOne={
    id: 'newAdult',
    btnTo:'/newAdult',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'New Adult',
    headline: '',
    description: '`whoever saves a life, it is considered as if he saved an entire world.`\n (from - Babylonian Talmud, Sanhedrin )',
    buttonLabel:'Add an adult to the family',
    imgStart:false,
    img: adultout,
    dark:true,
    primary:true,
    darkText:false,
    isHome:false
}

export const homeObjTwo={
    id: 'newDelieryMan',
    btnTo:'/newDelieryMan',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'New volunteer',
    headline: '',
    description: 'When was the last time you did something for someone?',
    buttonLabel:'Add a volunteer',
    imgStart:true,
    img: DeliveryMan,
    dark:false,
    primary:false,
    darkText:true,
    isHome:false
}

export const homeObjThree={
    id: 'newdelivery',
    btnTo:'/newdelivery',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'New Delivery',
    headline: '',
    description: 'When Action Meets Compassion, Lives Change',
    buttonLabel:' Add a delivery',
    imgStart:false,
    img: Delivery,
    dark:true,
    primary:true,
    darkText:false,
    isHome:false
}
export const homeObjFour={
    id: 'graphs',
    btnTo:'/graphs',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Graphs',
    headline: '',
    description: 'Planned VS Done statistics graphs.',
    buttonLabel:'See more',
    imgStart:true,
    img: Graph,
    dark:false,
    primary:false,
    darkText:true,
    isHome:false
}
export const homeObjFive={
    id: 'blogsManager',
    btnTo:'/blogsManager',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Blog',
    headline: '',
    description: 'Don`t miss the opportunity to take a look at our blog - fascinating stories and events about our special activity are waiting for you to be read.',
    buttonLabel:'Our blog',
    imgStart:false,
    img: Blog,
    dark:true,
    primary:true,
    darkText:false,
    isHome:false
}

