import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';


const Section = styled.div`
background-color: black;
    position: fixed;
    top: 0px;
    z-index: 1;
    width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media only screen and (max-width: 1920px){
      width: 100%;
    }

    @media only screen and (max-width: 360px){
      width: 360px;
    }
`

const Container = styled.div`
    position: absolute;
    display: flex;
    width: 100%; // le asigna el tamaño al container
    height: 100%;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 764px) {
      justify-content: end;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Logo = styled.img`
display: flex;
height: 50px;

@media only screen and (max-width: 450px) {
      display: none;
    }
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  height: 50px;
  align-items: center;

  @media only screen and (max-width: 450px) {

      
    }
`

const ListItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
`

const Icons = styled.div`
  
  display: flex;
  margin-right: 10px;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 1400px) {
    padding: 10px;
    margin-right: 0px;
  }
`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #e75d5c;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Navbar = () => {

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"></Logo>
            <List>
              <ListItem to='#home'>Inicio</ListItem>
              <ListItem to='#who'>Sobre Mi</ListItem>
              <ListItem to='#works'>Proyectos</ListItem>
            </List>
        </Links>
        <Icons>
          <Button>Contactame</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar