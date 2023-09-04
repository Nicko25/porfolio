import React from 'react'
import styled from 'styled-components'
import Trabajo from './trabajo';
import MouseIconDown from './MouseIconDown';
import MouseIconUp from './MouseIconUp';

const Section = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-height: 650px){
    height: 650px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 1400px;
  gap: 50px;

  min-width: 330px;
  min-height: 300px;


  @media only screen and (max-width: 1550px) {
    width: 90%;
    gap: 0px;
  }

  @media only screen and (max-width: 1080px) {
      flex-direction: column-reverse;
      justify-content: center;
  }

  @media only screen and (max-height: 590px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Frame = styled.div`
  position: absolute;
  max-width: 1500px;
  width: 100%;
  height: 65%;
	border: 1rem solid #ffffff;
	border-image: repeating-linear-gradient(45deg, transparent, transparent 5px, #ffffff 6px, #ffffff 15px, transparent 16px, transparent 20px) 20/1rem;
  
  @media only screen and (max-width: 1550px) {
    width: 90%;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    height: 80%;

  }

  @media only screen and (max-height: 564px) {
    border: none;
    background: none;
  }

`;

const Left = styled.div`
  width: 50%;
  height: 50%;
  

  @media only screen and (max-width: 1080px) {
    width: 100%;
  }

  @media only screen and (max-height: 950px) {
    height: 40%;
  }

  @media only screen and (max-height: 740px) {
    display: none;
  }
  
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  @media only screen and (max-height: 740px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 60%;
  }


`;

const Title = styled.h1`
  font-size: 74px;
  text-align: center;

  @media only screen and (max-width: 1550px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
  @media only screen and (max-height: 480px) {
    font-size: 40px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #b1b1b16c;
  border-radius: 5px;
  padding: 10px;
  
  

  @media only screen and (max-width: 1550px) {
    padding-left: 10px;
    padding: 15px;
    margin: 10px;
  }
  @media only screen and (max-width: 768px) {
    right: auto;
    justify-content: end;
  }
`;

const WhatWeDo = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #e75d5c;
`;

const Desc = styled.p`
  font-size: 23px;
  font-weight: 400;
  color: lightgray;
  
  

  @media only screen and (max-width: 1550px) {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  background: #e75c5c;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 140px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;

  a{
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  span{
    color: #000;
    font-weight: 400;
    font-size: 15px;
  }

`;

const Who = () => {
  return (
    <Section id='who'>
      <Frame></Frame>
      <Container>
        <Left>
          <Trabajo></Trabajo>
        </Left>
        <Right>
          <Title>Analiza. Planea. Diseña. Optimiza. </Title>
          <DescContainer>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>Como trabajo</Subtitle>
            </WhatWeDo>
            <Desc>La meta es la comprensión del problema. Lo mas importante es entender las necesidades de los clientes para poder brindar un software que cumpla con lo requerido por el cliente.</Desc>
          </DescContainer>
          <Button> 
            <a href='https://github.com/Nicko25' target='_blank'>
              <span>Ver Proyectos</span>
            </a>
          </Button>
        </Right>
      </Container>
      <MouseIconUp/>
      <MouseIconDown/>
    </Section>
  )
}

export default Who