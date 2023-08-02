import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    align-items: start;
  }
`;

const Img = styled.img`
  width: 700px;
  height: 500px;
  z-index: 1;
  margin: auto;
  animation-name: appear;
  animation-duration: 1s;
  //animation: animate 5s infinite ease alternate;

  @keyframes appear {
    from { transform: scale(130%); }
    to { transform: scale(100%); }
  }
  
  @media only screen and (max-width: 1400px) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

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

  
  @media only screen and (max-width: 768px) {

  }
`;

function Automation() {
  return (
    <Container>
      <DescContainer>
        <TitleContainer>
          <Line src="./img/line.png"></Line>
          <Subtitle>Automation</Subtitle>
        </TitleContainer>
        <Desc>In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass.</Desc>
      </DescContainer>  
      <Img src="./img/typing_robot_by_Austing_Light2.gif"></Img>
    </Container>
  )
}

export default Automation