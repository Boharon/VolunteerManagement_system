import React from 'react'
import { SidebarContauner, Icon, CloseIcon, SidebarWrapper,SideBtnWarp,SidebarMenu,SidebarRoute,SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContauner isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}> About </SidebarLink>
                    <SidebarLink to="ourMission" onClick={toggle}> Our mission </SidebarLink>
                    <SidebarLink to="contactUs" onClick={toggle}> Contact us </SidebarLink>
                </SidebarMenu >
               {/* <SideBtnWarp>
                    <SidebarRoute to="/signin" > Sign In </SidebarRoute>
               </SideBtnWarp>*/}
        </SidebarWrapper >
        </SidebarContauner >                                     
)
}

export default Sidebar