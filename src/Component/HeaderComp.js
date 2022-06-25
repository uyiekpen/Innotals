import React, { useState } from 'react'
import styled from "styled-components"
import {AiOutlineTwitter,
    AiOutlineInstagram,
} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {HiMail,
    HiMenuAlt2
} from "react-icons/hi"
import Sidebar from './Sidebar'
import {GiCancel} from "react-icons/gi"
import { VscThreeBars } from "react-icons/vsc";


const HeaderComp = () => {
    const [Open , SetisOpen] = useState(null)

    const onToggle = () =>{
        SetisOpen(!Open) 
    }

  return (
    <>
    <Container>
        <Wrapper>
            <LogoHolder>
                <Logo src="/assets/logo2.png"/>
            </LogoHolder>
            <NavMenu>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink>Events</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Blogs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Contact Us</NavLink>
                </NavItem>
               
            </NavMenu>
            <NavLogo>
                <NavLogoItem>
                    <NavLink>Hire Talents</NavLink>
                </NavLogoItem>
                <NavLogoItem>
                   <Button>Sign Up</Button>
                </NavLogoItem>
                
                
            </NavLogo>
            <NavBar>
            {Open ? (
                <GiCancel onClick={onToggle} color="#fff" size="30px" />
              ) : (
                <VscThreeBars onClick={onToggle} color="#fff" size="30px" />
              )}
                
                
               
            </NavBar>
        </Wrapper>
    </Container>
    {
        Open? <Sidebar onToggle={onToggle} SetisOpen={SetisOpen}/>: null
    }
    </>
  )
}

export default HeaderComp

const Button = styled.div`
height: 50px;
width: 120px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
background-color:#2976FC;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`

const NavBar = styled.div`
display:none ;
@media screen and (max-width: 768px){
    display:  block;
    font-size: 40px;
    
}
@media screen and (max-width: 320px){
    display:  block;
    font-size: 20px;
    & :hover{
        cursor:pointer;
    }
}



`

const NavLogoItem = styled.div`
@media screen and (max-width: 768px){
    display:  none;
}
@media screen and (max-width: 768px){
    font-size: 15px;
}
`

const NavLogo = styled.div`
height: 80px;
display:flex;
width: 250px;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 768px){
height: 80px;
width:100px;
display:flex;
align-items:center;
justify-content:space-between;
}
`


const NavLink = styled.div`
font-weight:bold ;
font-size:15px ;
position: relative;
color: white;


::after {
    content: "";
    position: absolute;
    background-color:#2976FC;
    height: 3px;
    width: 100%;
    left: 0;
    top: 21px;
    opacity: 0;
    transition: all 550ms;
    transform: scale(0);
    transform-origin: center left;
}
&.active {
    ::after {
        content: "";
        position: absolute;
        background-color:#2976FC;
        height: 3px;
        width: 80%;
        left: 0;
        top: 21px;
        opacity: 1;
        transition: all 550ms;
        transform: scale(1);
        transform-origin: center left;
    }
}
:hover {
    cursor: pointer;
    transform: scale(1.02);

    ::after {
        opacity: 1;
        transform: scale(1);
    }
}
@media screen and (max-width: 768px){
    font-weight:bold ;
font-size:12px ;
    
}

`

const NavItem = styled.div``
const NavMenu = styled.div`
height: 80px;
width:40% ;
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 768px){
    display:  none;
    
}

`

const Logo = styled.img`
height: 50px;
object-fit: contain;
width: 100px;
color: black;
letter-spacing: 1.5px;
@media screen and (max-width: 760px){
height: 50px;
object-fit: contain;
width: 100px;
color: black;
}
@media screen and (max-width: 768px){
font-size: 20px;
font-weight: bold;
color: black;
letter-spacing: 1.5px;
}
`


const LogoHolder = styled.div``


const Wrapper = styled.div`
height: 80px;
width:90vw ;
display: flex ;
align-items: center;
justify-content:center;
justify-content:space-between ;
`

const Container = styled.div`
height: 80px;
width:100vw ;
display: flex ;
justify-content:center ;
align-items:center;
position:fixed ;
font-size:poppins ;
z-index: 1;
min-height: calc(100vh-80px);
top: 0;
bottom: 0;
left:0;
right:0 ;
font-family:poppins ;
background: #121212E5;


`