import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 540px;
  height: 300px;
  z-index: 1;
  margin: auto;
  animation-name: appear;
  animation-duration: 1s;
  //animation: animate 5s infinite ease alternate;

  @keyframes appear {
    from { transform: scale(130%); }
    to { transform: scale(100%); }
  }
  
  @media only screen and (max-width: 1400px) {
    width: 540px;
    height: 300px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-height: 768px) {
    display: none;
  }
`;

const DescContainer = styled.div`
  position: absolute;
  background: #cbcbcb6c;
  border-radius: 5px;
  z-index: 2;
  width: 100%;
  height: fit-content;
  top: 43%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media only screen and (max-width: 1440px) {
    width: 95%;
  }

  @media only screen and (max-width: 768px) {
    top: 400px
  }

  @media only screen and (max-height: 610px) {
    top: 60%;
  }

  /* rotated smartphones*/
  @media only screen and (max-height: 465px) {
    top: 230px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #e75d5c;
`;

const Desc = styled.p`
  font-size: 23px;
  font-weight: 400;
  color: lightgray;
  text-align: left;

  @media only screen and (max-width: 768px) {
    font-size: 20px;

  }
`;

function Automation() {
  return (
    <Container>
      <DescContainer>
        <TitleContainer>
          <Line src="./img/line.png"></Line>
          <Subtitle>Automation</Subtitle>
        </TitleContainer>
        <Desc>Si es un proceso repetitivo, seguramente pueda automatizarse. Actualmente lo hago como un hobby,
           en el cual busco usar los conocimientos que voy aprendiendo,
            desarrollando programas que ayuden a agilizar tareas que con el tiempo se vuelven muy tediosas de realizar.</Desc>
      </DescContainer>  
      <Img src="./img/typing_robot_by_Austing_Light2.gif"></Img>
    </Container>
  )
}

export default Automation