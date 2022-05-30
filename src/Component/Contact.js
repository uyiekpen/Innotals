import React from 'react'
import styled from 'styled-components'
import {AiOutlineTwitter,
    AiOutlineInstagram,
} from "react-icons/ai"
import {GrLinkedinOption} from "react-icons/gr"
import {HiMail,
    HiMenuAlt2
} from "react-icons/hi"

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <TextHolder>Connect with us</TextHolder>
            <LogoHolder>
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
            </LogoHolder>
        </Wrapper>
    </Container>
  )
}

const NavLogoItem = styled.div`
font-size:40px ;
@media screen and (max-width: 760px){
}

`
const LogoHolder  = styled.div`
height:300px ;
width:50% ;
display:flex ;
justify-content:center ;
align-items:center ;
justify-content:space-evenly ;
color: #fff;
@media screen and (max-width: 768px){
    height:200px ;
width:300px ;
display:flex ;
justify-content:center ;
align-items:center ;
justify-content:space-evenly ;
color: #fff;
}
`


const TextHolder = styled.div`
height:300px ;
width:50% ;
display:flex ;
justify-content:center ;
align-items:center ;
font-size: 40px;
font-weight:bold ;
color: #fff;
@media screen and (max-width: 768px){
height:200px ;
width:300px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-size: 25px;
font-weight:bold ;
color: #fff;
}
`

const Wrapper = styled.div`
background-color:#718490 ;
height:300px ;
width:90vw ;
display:flex ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 768px){
background-color:#718490 ;
height:200px ;
width:90vw ;
display:flex ;
justify-content:center ;
align-items:center ;   
flex-direction:column ;
}

`


const Container = styled.div`
background-color:#718490 ;
height:300px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 768px){
background-color:#718490 ;
height:200px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ; 
}
`

export default Contact
