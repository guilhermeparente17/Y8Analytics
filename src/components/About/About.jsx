import React from 'react'
import { AboutContainer } from './About.Elements'
import AboutItem from '../About-Item/About-Item'


const About = () => {

  const data = [
    {
      id: 1,
      logo: 'rocket',
      title: 'Missão',
      content: 'Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou um ótimo lugar para você contar sua história.'
    },
    {
      id: 2,
      logo: 'user',
      title: 'Trajetoria',
      content: 'Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou um ótimo lugar para você contar sua história.'
    },
    {
      id: 3,
      logo: 'data',
      title: 'Relatórios',
      content: 'Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou um ótimo lugar para você contar sua história.'
    }
  ]
  return (
    <AboutContainer>
        {
          data.map(item => {
            return <AboutItem key={item.id} title={item.title} logo={item.logo} content={item.content} />
          })
        }
    </AboutContainer>
  )
}

export default About