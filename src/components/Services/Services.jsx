import React from 'react'
import { SectionImg, SectionInfo, SectionText, SectionTitle, ServiceContent, ServiceSection, ServiceTitle, ServicesContainer } from './Services.Elements'
import Undraw1 from '../../assets/undraw1.svg'
import Undraw2 from '../../assets/undraw2.svg'


const Services = () => {
  return (
    <ServicesContainer>
        <ServiceTitle>Services</ServiceTitle>

        <ServiceContent>
            <ServiceSection>
                <SectionImg src={Undraw1} />

                <SectionInfo>
                    <SectionTitle>Inteligente</SectionTitle>
                    <SectionText>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. 
                        É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar 
                        o seu próprio conteúdo e trocar fontes.
                    </SectionText>
                </SectionInfo>
            </ServiceSection>

            <ServiceSection reverse={true}>
                <SectionImg src={Undraw2} />
                <SectionInfo>
                    <SectionTitle>Inteligente</SectionTitle>
                    <SectionText>Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. 
                        É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar 
                        o seu próprio conteúdo e trocar fontes.
                    </SectionText>
                </SectionInfo>
            </ServiceSection>
        </ServiceContent>
    </ServicesContainer>
  )
}

export default Services