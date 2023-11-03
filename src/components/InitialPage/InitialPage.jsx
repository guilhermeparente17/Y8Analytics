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
            <InitialTitle>A forma mais esperta de <br /> controlar seus dados.</InitialTitle>
            <InitialButtom>Dashboards</InitialButtom>
        </InitialContent>
    </InitialContainer>
  )
}

export default InitialPage