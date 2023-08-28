import React, { useState } from 'react'
import styled from 'styled-components'
import Development from './Development'
import Automation from './Automation'
import WebDesign from './WebDesign'

const data = [
  "Web Design",
  "Development",
  "Automation"
];


const Section = styled.div`
  position: relative;
  height: 100vh;
  justify-content: center;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  color: black;
  font-size: 14px;

  @media only screen and (max-height: 740px){
    height: 740px;
  }
`;

const Container = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  width: 1400px;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1440px) {
    width: 90%;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1440px) {
    position: relative;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 480px) {
    height: 60%;
  }

  @media only screen and (max-height: 610px) {
    padding-top: 40px;
  }
`;

const Bottom = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 100%;
  height: 50%;
  @media only screen and (max-width: 480px) {
    height: 40%;
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #2347a390;
  border: 1px solid #1c387e;
  border-radius: 10px;
  width: 600px;
  height: 600px;

  @media only screen and (max-width: 1400px) {
  }
`;
const Line = styled.img`
  height: 5px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 74px;
  font-weight: bold;
  max-width: 500px;

  @media only screen and (max-width: 1440px) {
    padding-top: 8%;
    font-size: 50px;
  }
  
  @media only screen and (max-height: 740px) {
    padding-top: 8%;
    font-size: 50px;
  }
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
  }
`;

const List = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 110px;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-height: 740px) {
    gap: 10px;
    align-items: center;
  }

  /* rotated smartphones*/
  @media only screen and (max-height: 400px) {
    margin-top: 0px;
    flex-direction: row;
  }
`;

const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 70px;

`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  cursor: pointer;
  background: #cbcbcb6c;
  border: 1px solid #fff;
  outline: none;
  transition: 1s ease-in-out;
  margin: 0px;
  padding: 0px;

  svg{
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
  }
  :hover svg {
    stroke-dashoffset: -480;
  }
`;

const SvgButton = styled.svg`
  position: absolute;
  width: 200px;
  height: 60px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #ffffff68;
  justify-content: center;
  width: 40px;
  height: 60px;
`;

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 60px;
`;

const LogoButton = styled.img`
  width: 25px;
  height: 25px;
`;

const SpanText = styled.span`
  position: absolute;
  color: #fff;
  font-size: 24px;
  font-weight: 400;

  :hover {
    transition: 1s ease-in-out;
    color: #d4d3d3;
  }
`;

const BottomMenu = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid white;
  width: 1450px;
  height: 55%;
  bottom: 80px;


  background: linear-gradient(253deg, #3E71ED, #2D89D6, #2D30D6);
  background-size: 300% 300%;
  animation-name: mover;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @media only screen and (max-width: 1470px) {
    width: 1430px;
  }

  @media only screen and (max-width: 1440px) {
    width: 100%;
    height: 50%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-height: 740px) {
    display: none;
  }

  @-webkit-keyframes mover {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @-moz-keyframes mover {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @keyframes mover {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section id='works'>
      <Container>
        <Top>
          <TitleContainer>
            <Title>Mis trabajos</Title>
          </TitleContainer>
          <TopMenu>
            <List>
              {data.map((item) => (
                <Center key={item} text={item} onClick={() => setWork(item)}>
                  <Btn>
                    <SvgButton viewBox="0 0 200 60">
                      <polyline points="199,1 199,59 1,59 1,1 167,1" />
                      <polyline points="199,1 199,59 1,59 1,1 167,1"/>
                    </SvgButton>
                    <LogoContainer>
                      {item === "Web Design" ? (
                        <LogoButton src="./img/monitor.png"></LogoButton>
                      ) 
                      : item === "Development" ? (
                        <LogoButton src="./img/smartphone.png"></LogoButton>
                      ) 
                      : (
                        <LogoButton src="./img/chip.png"></LogoButton>
                      )}
                    </LogoContainer>
                    <SpanContainer>
                      <SpanText>{item}</SpanText>
                    </SpanContainer>
                  </Btn>
                </Center>
              ))}
            </List>
          </TopMenu>
        </Top>
        <Bottom>
          <BottomMenu/>
            {work === "Web Design" ? (
              <WebDesign/>
            ) : work === "Development" ? (
              <Development />
            ) : (
              <Automation />
            )}
        </Bottom>
      </Container>
    </Section>
  )
}

export default Works