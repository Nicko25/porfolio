import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Smartphone from "./Smartphone"
import styled from "styled-components";

const DescContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: fit-content;
  top: 40%;
  display: flex;
  flex-direction: column;
  padding: 10px;


  @media only screen and (max-width: 768px) {
    position: relative;
    top: 0px;
  }

  @media only screen and (max-height: 740px) {
    position: relative;
    top: 0px;
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

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (max-height: 740px) {
    display: none;
  }
`;

function Development() {

  return (
    <>
      <DescContainer>
        <TitleContainer>
          <Line src="./img/line.png"></Line>
          <Subtitle>Development</Subtitle>
        </TitleContainer>
        <Desc>Un punto clave del desarrollo de paginas web es el poder mantener su adaptabilidad en todo tipo de dispositivos, de esta forma,
         los usuarios podran tener la misma experiencia al visitar nuestro sitio sin importar que medios utilicen.
        </Desc>
      </DescContainer>
      <CanvasContainer> 
        <Canvas style={{zIndex: 1}}>
          <Stage enviroment="city" intensity={0.6}>
            <Smartphone/>
          </Stage>
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </CanvasContainer>
    </>
  )
}

export default Development