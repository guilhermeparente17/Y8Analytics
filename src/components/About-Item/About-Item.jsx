import React from 'react'
import { AIContent, AITitle, AboutItemContainer } from './About-Item.Elements'
import { FaRocket } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillClipboardDataFill } from 'react-icons/bs'

const AboutItem = ({ title, logo, content }) => {
  const handleSvgImage = (name) => {
    if (name === 'rocket') {
        return <FaRocket size={50} color={'RGB(132, 77, 254)'} />
    } else if (name === 'user') {
        return <FaUserAlt size={50} color={'RGB(132, 77, 254)'} />
    } else if (name === 'data') {
        return <BsFillClipboardDataFill size={50} color={'RGB(132, 77, 254)'} />
    }
  }
  return (
    <AboutItemContainer>
        {handleSvgImage(logo)}
        <AITitle>{title}</AITitle>
        <AIContent>{content}</AIContent>
    </AboutItemContainer>
  )
}

export default AboutItem