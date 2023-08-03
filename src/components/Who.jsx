import React from 'react'
import styled from 'styled-components'

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

  @media only screen and (max-width: 1440px) {
    width: 90%;
  }
  
  @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      justify-content: center;
  }
`;

const Left = styled.div`
  display: flex;
  width: 50%;

  @media only screen and (max-width: 1400px) {
    padding-left: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }

  @media only screen and (max-height: 740px) {
    display: none;
  }
  
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 720px) {
    position: relative;
    right: none;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-height: 740px) {
    position: relative;
    right: none;
    height: 100%;
    width: 100%;
  }




`;


const Img = styled.img`
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 0;
  

  @media only screen and (max-width: 1400px) {

  }
`;


const Title = styled.h1`
  font-size: 74px;
  text-align: center;

  @media only screen and (max-width: 1400px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const DescContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;


  @media only screen and (max-width: 1400px) {
    padding-left: 10px;
    align-items: center;
    padding: 15px;
  }
  @media only screen and (max-width: 768px) {
    right: auto;
    justify-content: end;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  text-align: justify;
  text-justify: distribute-all-lines;

  @media only screen and (max-width: 1400px) {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    

  }
`;

const Button = styled.button`
  background-color: #e75d5c;
  color: white;
  font-weight: 500;
  width: 110px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section id='who'>
      <Container>
        <Left>
          <Img src="./img/trabajo.png"></Img>
        </Left>
        <Right>
          <Title>Analiza. Planea. Diseña. Optimiza. </Title>
          <DescContainer>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>Como trabajo</Subtitle>
            </WhatWeDo>
            <Desc>La meta es la comprensión del problema. Lo mas importante es enteder los deseos y necesidades del cliente para asi poder brindar un software que cumpla con lo requerido por el cliente</Desc>
            <Button>Ver projectos</Button>
          </DescContainer>
        </Right>
      </Container>
    </Section>
  )
}

export default Who