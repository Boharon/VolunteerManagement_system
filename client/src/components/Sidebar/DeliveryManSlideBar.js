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
                    <SidebarLink to="schedule" onClick={toggle}>Schedule</SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
                </SidebarMenu >
        </SidebarWrapper >
        </SidebarContauner >                                     
)
}

export default Sidebar