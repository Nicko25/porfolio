import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';


const Section = styled.div`
    position: fixed;
    top: 0px;
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;


    @media only screen and (max-width: 360px){
      width: 360px;
    }
`

const Container = styled.div`
    position: absolute;
    display: flex;
    background-color: black;
    width: 100%;
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
  gap: 30px;
  padding-left: 20px;

`

const Logo = styled.img`
display: flex;
height: 40px;

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
    gap: 10px;
      
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

const Button = styled.a`
  background-color: #e75d5c;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  color: black;
  width: 80px;
  padding: 10px;
  border-radius: 5px;
`;


const Navbar = () => {

  return (
    <Section>
      <Container>
        <Links>
            <List>
              <ListItem to='#home'>Inicio</ListItem>
              <ListItem to='#who'>Proyectos</ListItem>
              <ListItem to='#works'>Sobre mi</ListItem>
            </List>
        </Links>
        <Icons>
          <Button href='https://www.linkedin.com/in/nico-menendez/' target='_blank'>Contacto</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar