import React , {useRef} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage , Center , AccumulativeShadows, RandomizedLight, Environment} from "@react-three/drei";
import Plane from "./Plane";



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
  }
  @media only screen and (max-height: 590px) {
      flex-direction: row;
  }

`;

const Info = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: end;

  @media only screen and (max-width: 1200px) {
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
  transform: rotate(220deg) scaleX(-1);
  

  @media only screen and (max-width: 1400px) {
    width: 160px;
    height: 160px;
    transform: rotate(210deg);
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

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  width: 50%;
  height: auto;


  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    position: relative;
    justify-content: center;
    padding-left: 50px;
  }

`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 0;


  @media only screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
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

  @media only screen and (max-width: 1400px) {
    text-align: center;
  }
  
  @media only screen and (max-width: 768px) {
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
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #e75d5c;

  @media only screen and (max-width: 768px) {
    
  }
  
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
      <Container>
        <Left>
          <Title>¡Hola!, me llamo Nicolas</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Front-End Developer</Subtitle>
          </WhatWeDo>
          <Desc>Diseño, desarrollo y mantengo aplicaciones con caracteristicas responsive que ofrezcan una experiencia fluida para los usuarios.</Desc>
        </Left>
        <Right>
          <Img src="./img/nube.png"></Img>
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
    </Section>
  )
}

export default Hero