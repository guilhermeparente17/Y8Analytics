import React from 'react'
import { HeaderContainer, HeaderContent, HeaderItem, HeaderLogoContainer, HeaderMenu } from './Header.Elements'
import { HiMenu } from 'react-icons/hi';

const Header = ({ toggle }) => {
  return (
    <HeaderContainer>
        <HeaderLogoContainer>
            Y8 Analytics
        </HeaderLogoContainer>
        <HeaderContent>
            <HeaderItem>Home</HeaderItem>
            <HeaderItem>About us</HeaderItem>
            <HeaderItem>Services</HeaderItem>
            <HeaderItem>Dashboards</HeaderItem>
        <HeaderMenu onClick={() => toggle()}>
            <HiMenu size='30' />
        </HeaderMenu>
        </HeaderContent>
    </HeaderContainer>
  )
}

export default Header