import React,{useState} from 'react'
import styled from "styled-components"
import {GiCancel} from "react-icons/gi"
import {AiOutlineTwitter,
    AiOutlineInstagram,
} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {HiMail,
} from "react-icons/hi"


const Sidebar = ({Open,onToggle}) => {  
    
    return (
        <Container Open={Open}>
            <SidebarHolder>
              

                <SideBarMenu>
                <SideBarContent>
                <Content>Home</Content>
                <Content>Signup</Content>
                <Content>Events</Content>
                <Content>Blogs</Content>
                <ContentSign>Contact Us</ContentSign>
                
            </SideBarContent>
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
            </SideBarMenu>
            
            </SidebarHolder>
            
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
position: fixed;
width: 80%;
height: 100%;
background: #121212E5;
z-index: 10;
top: 0;
font-family:poppins ;
left:0 ;
opacity: ${({Open})=>(Open? "0" : "90%" )};
right: ${({Open})=>(Open? "0" : "100%" )};
display: flex;
justify-content: center;
transition: 0.4s ease-in-out ;

`

const SidebarHolder = styled.div`
width: 90%;
height: 100%;
margin-top: 70px;
display:flex;
flex-direction:column;



`
const IconHolder = styled.div`
display: flex;
width: 90%;
justify-content: flex-end;
font-size: 20px;
color: #fff;

`
const SideBarMenu = styled.div`
height:600px;
width: 90%;
margin-top: 20px;
display:flex;
flex-direction:column;
justify-content: space-between;
`


const SideBarContent = styled.div`
font-size: 20px;
margin-top: 0.5rem;
color: #fff;

`

const Content = styled.div`
display: flex;
flex-direction: row;

`

const ContentSign = styled.div`
margin-top: 10px;
margin-top: 0.5rem;

font-size: 20px;
font-weight: lighter;
`
const NavLogoItem = styled.div`
font-size: 20px;
color: #fff;

`

const NavLogo = styled.div`
height: 100px;
width:150px;
display:flex;
align-items:center;
justify-content:space-between;
font-family:poppins ;
`
