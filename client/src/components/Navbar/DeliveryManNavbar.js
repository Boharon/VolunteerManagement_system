import React, {useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavBarElement';
import { animateScroll as scroll} from 'react-scroll';
import Login from '../Login';
import Logo from '../images/logo2.png'

const Navbar = ({toggle,logoutHandler}) => {
    const [scrollNav,setScrollNav]=useState(false)

    const changeNav=()=>
    {
        if(window.scrollY>=80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    const [showLogin,setShowLogin]=useState(false);
    const openLogin =()=>{
        setShowLogin(prev=>!prev);
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}><img  style={{height:'100',width:'100'}} src={Logo} /></NavLogo>
               <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                <NavItem>
                    <NavLinks to="schedule" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Schedule</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="blog" smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Blog</NavLinks>
                </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink onClick={logoutHandler}>LogOut</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
        </>
    )
}

export default Navbar
