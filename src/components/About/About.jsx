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
        {/* <img src="https://static.wixstatic.com/media/d0220c_a7f38a088979498b9254e7a1c6ccac1d~mv2.png/v1/fill/w_239,h_188,al_c,lg_1,q_85,enc_auto/d0220c_a7f38a088979498b9254e7a1c6ccac1d~mv2.png" alt="" style={{width: '239px', height: '188px', objectFit: 'cover', objectPosition: '50% 50%'}}></img> */}
    </AboutContainer>
  )
}

export default About