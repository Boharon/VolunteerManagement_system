import React,{useState} from 'react'
import Footer from '../Footer';
import HeroSaction from '../HeroSection';
import InfoSection from '../InfoSection';
import NewAdult from '../NewAdult';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import Navbar from '../Navbar'
import Services from '../Services';
import Sidebar from '../Sidebar'
import Fab from '@material-ui/core/Fab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
//import Chat from '../Chat/Chat';
import { styled } from 'styled-components';

const Home = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    const btnChatStyle={
        backgroundColor: '#00BFA6',
        position: 'fixed',
        right:"5%",
        top: "80%",
        zIndex: "10"
    }
    const [username,setUserName]=useState('tami');
    const [userroom,setRoom]=useState('3');
    const [showChat,setShowChat]=useState(false);
    const openChat =()=>{
        setShowChat(prev=>!prev);
    }
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSaction/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home