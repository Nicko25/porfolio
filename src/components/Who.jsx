import React from 'react'
import styled from 'styled-components'
import Trabajo from './trabajo';
import MouseIcon from './MouseIcon';

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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 1400px;
  gap: 60px;


  @media only screen and (max-width: 1440px) {
    gap: 0px;
  }

  
  @media only screen and (max-width: 1000px) {
      flex-direction: column-reverse;
  }
`;

const Frame = styled.div`
  position: absolute;
  max-width: 1500px;
  width: 100%;
  height: 65%;
	border: 1rem solid #ffffff;
	border-image: repeating-linear-gradient(45deg, transparent, transparent 5px, #ffffff 6px, #ffffff 15px, transparent 16px, transparent 20px) 20/1rem;
  
  @media only screen and (max-width: 1440px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    height: 80%;
    border: none;
    background: none;
  }

  @media only screen and (max-height: 465px) {
    border: none;
    background: none;
  }

`;

const Left = styled.div`
  width: 60%;

  @media only screen and (max-width: 1440px) {
    align-items: center;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }

  @media only screen and (max-height: 740px) {
    display: none;
  }
  
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media only screen and (max-height: 1440px) {
    width: 50%;
  }


  @media only screen and (max-height: 740px) {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

`;

const Title = styled.h1`
  font-size: 74px;
  text-align: center;

  @media only screen and (max-width: 1440px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #cbcbcb6c;
  border-radius: 5px;
  padding: 10px;
  
  

  @media only screen and (max-width: 1400px) {
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
  
  

  @media only screen and (max-width: 1400px) {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    

  }
`;

const Button = styled.a`
  background-color: #e75d5c;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
  margin-top: 15px;
  color: white;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
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
            <Button href='https://github.com/Nicko25' target='_blank'>Ver proyectos</Button>
          </DescContainer>
        </Right>
      </Container>
      <MouseIcon/>
    </Section>
  )
}

export default Who