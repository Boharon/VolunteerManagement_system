import React, { useState } from 'react'
import { SidebarContauner, Icon, CloseIcon, SidebarWrapper, SideBtnWarp, SidebarMenu, SidebarRoute, SidebarLink } from './SidebarElements'



const Sidebar = ({ isOpen, toggle }) => {

    const [showLogin, setShowLogin] = useState(false);
    const openLogin = () => {
        setShowLogin(prev => !prev);
    }

    return (
        <SidebarContauner isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="newAdult" onClick={toggle}> New adult </SidebarLink>
                    <SidebarLink to="newDelieryMan" onClick={toggle}>New volunteer</SidebarLink>
                    <SidebarLink to="newdelivery" onClick={toggle}>New delivery</SidebarLink>
                    <SidebarLink to="graphs" onClick={toggle}>Graphs</SidebarLink>
                    <SidebarLink to="blogsManager" onClick={toggle}>Blogs</SidebarLink>
                </SidebarMenu >
            </SidebarWrapper >
        </SidebarContauner >
    )
}

export default Sidebar