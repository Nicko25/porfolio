import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  right: 50px;
  bottom: 30px;
`;

const Scrolldown = styled.div`
  --color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;

  ::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #ffffff66;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
}
`;

const Chevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chevrondown = styled.div`
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  :nth-child(odd) {
  animation: pulse 500ms ease infinite alternate;
  }

  :nth-child(even) {
  animation: pulse 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
`;


const MouseIcon = () => {
  return (
    <Container>
      <Scrolldown>
        <Chevrons>
          <Chevrondown></Chevrondown>
          <Chevrondown></Chevrondown>
        </Chevrons>
      </Scrolldown>
    </Container>
  )
}

export default MouseIcon