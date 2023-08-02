import styled from 'styled-components';
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import { BrowserRouter } from 'react-router-dom';


const Img = styled.img`
  display: none;
  position: fixed;
  width: 1920px;
  height: 1080px;

  @media only screen and (max-width: 1920px) and (max-height: 1080px){
    display: initial;
  }

`

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  background: linear-gradient(253deg, #3E71ED, #2D89D6, #2D30D6);
  background-size: 300% 300%;
  //animation-name: mover;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  

  @media only screen and (max-width: 1920px) and (max-height: 1080px){
    height: 100vh;
    width: 1920px;
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
`
const ResFixer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  align-content: center;



`

const Container = styled.div`
  height: 100vh;
  width: 1920px;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  scrollbar-width: none; // hide scrollbar for firefox
    &::-webkit-scrollbar{  // hide scrollbar for chrome...
      display: none;
    }

  @media only screen and (max-width: 1920px){
    width: 100%;
  }

`


function App() {
  return (
    <ResFixer>
      <Background/>
      <Img src="./img/bg2.png"></Img>
      <Container>
        <BrowserRouter>
          <Hero/>
          <Who/>
          <Works/>
        </BrowserRouter>
      </Container>
    </ResFixer>
  )
}

export default App
