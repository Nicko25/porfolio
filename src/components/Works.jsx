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
    height: 90px;
    width: 340px;
    font-size: 40px;
    font-weight: 500;
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

  

  :focus{
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  :hover{
    box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
    color: #d5d5d5;
  }
  :active{
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
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
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
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