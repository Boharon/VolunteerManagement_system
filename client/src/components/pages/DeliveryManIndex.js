import React,{useState} from 'react'
import Footer from '../Footer';
import HeroSaction from '../HeroSection/DeliveryManHeroSaction';
import InfoSection from '../InfoSection';
import NewAdult from '../NewAdult';
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/DeliveryManData';
import Navbar from '../Navbar/DeliveryManNavbar'
import Services from '../Services';
import Sidebar from '../Sidebar/DeliveryManSlideBar'
import Fab from '@material-ui/core/Fab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Chat from '../Chat/Chat';
import { styled } from 'styled-components';
import NewChat from '../new-chat/NewChat'


const DeliveryManHome = ({logoutHandler}) => {
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
        <Navbar toggle={toggle}  logoutHandler={logoutHandler}/>
        <NewChat showChat={showChat} setShowChat={setShowChat}/>
        <HeroSaction/>
        <Fab className="chat-btn" onClick={openChat} style={btnChatStyle}  color="primary" aria-label="chat">
          <ChatBubbleIcon />
        </Fab>
       {/* <Chat username={username} userroom={userroom} showChat={showChat} setShowChat={setShowChat}/>*/}
        <InfoSection {...homeObjOne}/>
        {/*<NewAdult/>*/}
        <InfoSection {...homeObjTwo}/>
        <Footer/>
        </>
    )
}

export default DeliveryManHome