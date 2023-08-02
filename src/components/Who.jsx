import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  justify-content: center;
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-height: 650px){
    height: 650px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 1400px;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
`;

const Left = styled.div`
  position: absolute;
  display: flex;
  height: 50%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1400px) {
    padding-left: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  width: 50%;
  height: 50%;
  padding-right: 50px;


  @media only screen and (max-width: 1400px) {
    padding-left: 10px;
    padding-right: 30px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    right: auto;
    padding-left: 0px;
    padding-right: 0px;
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
    font-size: 60px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const DescContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;


  @media only screen and (max-width: 1400px) {
    padding-left: 10px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    right: auto;
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
  color: lightgray;
  text-align: justify;
  text-justify: distribute-all-lines;

  


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