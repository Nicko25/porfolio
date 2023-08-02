import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Screen from "./Screen";

const DescContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media only screen and (max-width: 768px) {
    position: relative;
    top: 0px;
  }
  @media only screen and (max-width: 400px) {

  }
`;

const TitleContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #e75d5c;
`;

const Desc = styled.div`
  font-size: 23px;
  color: lightgray;
  text-align: justify;
  text-justify: distribute-all-lines;
`;

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
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
      <Desc>In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.</Desc>
    </DescContainer>
    <CanvasContainer> 
      <Canvas style={{ position: "relative" , zIndex: 1}}>
        <Suspense fallback={null}>
          <Stage  environment="city" intensity={0.3}>
            <Screen />
          </Stage>
          <OrbitControls enableZoom={false}/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </>
  );
};

export default WebDesign;