import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu, 
    SidebarLink, 
 } from './Sidebar.Elements'

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>About us</SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Dashboards</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>Contact us</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar