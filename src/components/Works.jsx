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
  gap: 10px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1440px) {
    position: relative;
  }

  @media only screen and (max-width: 480px) {
    height: 60%;
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

  @media only screen and (max-height: 740px){
    
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
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-height: 740px) {
    gap: 10px;
    flex-direction: row;
    align-items: center;
  }
`;


const Button = styled.button` 


  :hover{

  }
  :active{
    
  }

  @media only screen and (max-width: 1000px) {
    height: 80px;
    width: 300px;
    font-size: 33px;

  }  

  @media only screen and (max-width: 768px) {
    height: 60px;
    width: 200px;
    font-size: 28px;
    gap: 2px;
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
          <List>
            {data.map((item) => (
              <Button key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </Button>
            ))}
          </List>
        </Top>
        <Bottom>
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