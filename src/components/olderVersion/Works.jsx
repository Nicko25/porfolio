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
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-height: 650px){
    height: 650px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 1400px;
  height: 100vh;
  align-items: center;
  justify-content: center;


  @media only screen and (max-width: 768px) {
    flex-direction: column;

  }

  @media only screen and (max-height: 650px){
    height: 650px;
  }
`;

const Left = styled.div`
  position: absolute;
  left: 0;
  gap: 10px;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  place-items: center;



  @media only screen and (max-width: 768px) {
    position: relative;
    justify-content: center;
  }

  @media only screen and (max-width: 570px) {
    width: 284px;
  }

  @media only screen and (max-height: 675px){
      position: relative;
      height: 335px;
    }
`;

const Right = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  width: 50%;
  height: 100vh;

  
  @media only screen and (max-width: 1400px) {
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 580px;
    height: 370px;
  }

  @media only screen and (max-height: 675px){
      position: relative;
      height: 335px;
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
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    width: 400px;
  }
`;

const List = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;



const ListItem = styled.button` 
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #32d2ff 0, #3b51fd 100%);
    border: 0;
    border-radius: 5px;
    box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    height: 56px;
    width: 380px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 38px;

  @media only screen and (max-width: 1400px) {
    font-size: 60px;
    width: 380px;

  }

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    width: 100%;
    color: white;
    -webkit-text-stroke: 0px;
  }

  :focus{
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  :hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  :active{
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

const Desc = styled.p`
  font-size: 23px;
  color: lightgray;
  text-align: justify;
  text-justify: distribute-all-lines;

  
`;


const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section id='works'>
      <Container>
        <Left>
          <TitleContainer>
            <Title>Mis trabajos</Title>
          </TitleContainer>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
          {work === "Web Design" ? (
              <Desc>La meta es la comprensión del problema. Lo mas importante es enteder los deseos y necesidades del cliente para asi poder brindar un software que cumpla con lo requerido por el cliente</Desc>
            ) : work === "Development" ? (
              <Desc>Development Development Development Development Development Development Development Development Development Development</Desc>
            ) : (
              <Desc>Automation Automation Automation Automation Automation Automation Automation Automation Automation Automation Automation</Desc>
            )}
        </Left>
        <Right>
            {work === "Web Design" ? (
              <WebDesign/>
            ) : work === "Development" ? (
              <Development />
            ) : (
              <Automation />
            )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works