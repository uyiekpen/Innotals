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

const HeaderComp = () => {
    const [Open , SetisOpen] = useState(null)

    const onToggle = () =>{
        SetisOpen(!Open) 
    }

  return (
    <Container>
        <Wrapper>
            <LogoHolder>
                <Logo>INNOTALS</Logo>
            </LogoHolder>
            <NavMenu>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Sign Up</NavLink>
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
                    <AiOutlineTwitter/>
                </NavLogoItem>
                 <NavLogoItem>
                    <GrLinkedinOption/>
                </NavLogoItem>
                 <NavLogoItem>
                    <AiOutlineInstagram/>
                </NavLogoItem>
                <NavLogoItem>
                    <HiMail/>
                </NavLogoItem>
            </NavLogo>
            <NavBar>
                
                <HiMenuAlt2 onClick={SetisOpen}
/>
                {
                    Open? <Sidebar onToggle={onToggle} SetisOpen={SetisOpen}/>: null
                }
            </NavBar>
        </Wrapper>
    </Container>
  )
}

export default HeaderComp

const NavBar = styled.div`
display:none ;
@media screen and (max-width: 760px){
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
font-size: 20px;
@media screen and (max-width: 760px){
    display:  none;
}
`

const NavLogo = styled.div`
height: 100px;
width:250px;
display:flex;
align-items:center;
justify-content:space-between;
`


const NavLink = styled.div`
font-weight:bold ;
font-size:20px ;

`

const NavItem = styled.div``
const NavMenu = styled.div`
height: 100px;
width:40% ;
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (max-width: 760px){
    display:  none;
}

`

const Logo = styled.div`
font-size: 40px;
font-weight: bold;
color: black;
letter-spacing: 1.5px;
@media screen and (max-width: 760px){
font-size: 30px;
font-weight: bold;
color: black;
letter-spacing: 1.5px;
}
`


const LogoHolder = styled.div``


const Wrapper = styled.div`
height: 100px;
width:90vw ;
display: flex ;
align-items: center;
justify-content:space-between ;
`

const Container = styled.div`
height: 100px;
width:100vw ;
display: flex ;
justify-content:center ;
align-items:center;
position:fixed ;
z-index: 1;
min-height: calc(100vh-100px);
top: 0;
bottom: 0;
left:0;
right:0 ;
`