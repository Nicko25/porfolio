import { CameraShake, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Screen from "./Screen";

const DescContainer = styled.div`
  position: absolute;
  background: #cbcbcb6c;
  border-radius: 5px;
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





const WebDesign = () => {


  return (
    <>
    <DescContainer>
      <TitleContainer>
        <Line src="./img/line.png"></Line>
        <Subtitle>Web Design</Subtitle>
      </TitleContainer>
      <Desc>Lo mas importante es dejar bien en claro los objetivos y propositos por los cuales se diseña una pagina web, de esta forma se podra saber que tipos de contenidos se necesitan y como debemos adaptarlos.</Desc>
    </DescContainer>
    <CanvasContainer> 
      <Canvas>
        <Suspense fallback={null}>
          <Stage  environment="city" intensity={0.3} camera={{ fov: 60, position: [-10, 45, 20]}}>
            <Screen />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </>
  );
};

export default WebDesign;