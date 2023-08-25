import React from "react";
import styled from "styled-components";
import videoTrabajo from "/trabajo/trabajo.mp4?url"



const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1400px){
  }
`;

const Video = styled.video`
  @media only screen and (max-width: 1400px){
    width: 400px;
  }
`;

const Ventanal = styled.img`
  position: absolute;
  
  @media only screen and (max-width: 1400px){
    width: 600px;
  }
`;

const Trabajadores = styled.img`
  position: absolute;
  padding-top: 90px;
  padding-left: 70px;
  @media only screen and (max-width: 1400px){
    width: 250px;
  }
`;

const Trabajo = () => {

  return (
      <Container>
        <Video src={videoTrabajo} autoPlay loop muted> </Video>
        <Ventanal src="/trabajo/ventanal.png"/>
        <Trabajadores src="/trabajo/trabajo.png"/>
      </Container>
  );
};

export default Trabajo;