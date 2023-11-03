import React from 'react'
import { GrayOverlay, InitialBg, InitialButtom, InitialContainer, InitialContent, InitialTitle, VideoBg } from './InitialPage.Elements'
import Video from '../../assets/video.mp4'

const InitialPage = () => {
  return (
    <InitialContainer>
        <InitialBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            <GrayOverlay />
        </InitialBg>
        <InitialContent>
            <InitialTitle>The smartest way to manage <br /> your data and generate information trough <br /> Data Analytics</InitialTitle>
            <InitialButtom>Dashboards</InitialButtom>
        </InitialContent>
    </InitialContainer>
  )
}

export default InitialPage