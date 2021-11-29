import Svg1 from '../images/blogg/1.svg'
import Svg2 from '../images/zaken+mehalek+haluka/undraw_deliveries_131a.svg'

export const homeObjOne={
    id: 'schedule',
    btnTo:'/schedule',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Schedule',
    headline: '',
    description: '1 Year = 365 Opportunities\n Click here to see the opportunities to change a life that are waiting for you',
    buttonLabel:'see more',
    imgStart:false,
    img: Svg2,
    dark:true,
    primary:true,
    darkText:false,
    isHome:false
}

export const homeObjTwo={
    id: 'blog',
    btnTo:'/blog',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine: 'Blog',
    headline: '',
    description: 'Don`t miss the opportunity to take a look at our blog - fascinating stories and events about our special activity are waiting for you to be read.',
    buttonLabel:'Our blog',
    imgStart:true,
    img: Svg1,
    dark:false,
    primary:false,
    darkText:true,
    isHome:false
}
