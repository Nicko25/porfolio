import React , {useRef} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage , Center , AccumulativeShadows, RandomizedLight, Environment} from "@react-three/drei";
import Plane from "./Plane";
import MouseIcon from './MouseIcon';



const Section = styled.div`
  position: relative;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 1400px;

  @media only screen and (max-width: 1440px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
  }
  @media only screen and (max-height: 590px) {
      flex-direction: row;
  }

`;

const Frame = styled.div`
  background: linear-gradient(253deg, #3E71ED, #2D89D6, #2D30D6);
  background-size: 300% 300%;
  animation-name: mover;
  animation-duration: 10s;
  animation-iteration-count: infinite;



  position: absolute;
  max-width: 1400px;
  width: 100%;
  height: 70%;
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




const Info = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: end;

  @media only screen and (max-width: 1400px) {
    display: none;
  }

  @media only screen and (max-height: 800px) {
    display: none;
  }
`;
const Flecha = styled.img`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 240px;
  height: 240px;
  transform: rotate(30deg) scaleX(-1);
  

  @media only screen and (max-width: 1400px) {
    transform: rotate(-60deg) scaleX(-1);
  }

  @media only screen and (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`; 
const Drag = styled.h2`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  color: white;
  position: absolute;
  top: 70%;
  left: 50%;
  font-size: 18px;
  transform: rotate(0deg);

  @media only screen and (max-width: 1400px) {
    top: 30%;
    left: 190px;
    
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    bottom: 70px;
  }
`;

const Left = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  position: relative;
  height: 50%;
  width: 50%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-right: 0;

  @media only screen and (max-width: 1400px) {
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;


const Right = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  width: 50%;
  height: 50%;
  margin-left: 0;

  

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 50%;
  }

`;


const CloudLeft = styled.img`
  position: absolute;
  width: 100%;
  object-fit: contain;
  margin: auto;
  z-index: 0;

  @media only screen and (max-width: 1400px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
      display: none;
  }

  @media only screen and (max-height: 780px) {
    margin: -5% 0% 0% 0%;
  }

  @media only screen and (max-height: 730px) {
    display: none;
  }

`;

const CloudRight = styled.img`
  position: absolute;
  width: 100%;
  object-fit: contain;
  margin: auto;
  z-index: 0;

  @media only screen and (max-height: 780px) {
    margin: -5% 0% 0% 0%;
  }

  @media only screen and (max-height: 730px) {
    margin: -15% 0% 0% 0%;
  }

  @media only screen and (max-height: 670px) {
    margin: -25% 0% 0% 0%;
  }

  @media only screen and (max-height: 590px) {
    display: none
  }

  @keyframes animate {
    from{
      transform: rotate3d(1,1,1,0deg) translateY(0px);
    }


    to{
      transform: rotate3d(1,1,1,5deg) translateY(30px);
    }
  }

`; 

const Title = styled.h1`
  font-size: 70px;
  z-index: 0;
  padding-left: 20px;

  @media only screen and (max-width: 1400px) {
    font-size: 60px;
  }
  
  @media only screen and (max-width: 768px) {
    padding-top: 60px;
    font-size: 40px;
    text-align: left;
  }

  @media only screen and (max-height: 540px) {
    padding-top: 60px;
    font-size: 40px;
    
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  justify-content: left;
  padding-left: 20px;
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
  z-index: 1;
  padding-left: 10px;


  @media only screen and (max-width: 1400px) {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-height: 400px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Hero = () => {


  return (
    <Section id='home'>
      <Navbar/>
      <Frame></Frame> 
      <Container>
            <Left>
              <CloudLeft src="./img/clouds.gif"></CloudLeft>
              <Title>Bienvenidos, me llamo Nicolas</Title>
              <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>Front-End Developer</Subtitle>
              </WhatWeDo>
              <Desc>Diseño, desarrollo y mantengo aplicaciones con caracteristicas responsive que ofrezcan una experiencia fluida para los usuarios.</Desc>
              
            </Left>
            <Right>
              <CloudRight src="./img/clouds.gif"></CloudRight>
              <Canvas  style={{position: 'absolute', animation: 'animate 1.5s infinite ease alternate'}} camera={{ position: [-8, 1.5, 8], fov: 25 } }>
                <group position={[1, -1.5, 0]}>
                  <Center top>
                    <Plane rotation={[-0.0, 6.2, 0.5]} scale={4} />
                  </Center>
                </group>
                <OrbitControls minPolarAngle={1.5} maxPolarAngle={2}  minAzimuthAngle={5.1} maxAzimuthAngle={0.5} enableZoom={false}/>
                <Environment preset="sunset" />
              </Canvas>
              <Info>
                <Flecha src="./img/arrow.gif"></Flecha>
                <Drag>Drag It !</Drag>
              </Info>
            </Right>
      </Container>
      <MouseIcon/>
    </Section>
  )
}

export default Hero