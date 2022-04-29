import React from 'react'
import styled from 'styled-components'
import {HiUserGroup} from "react-icons/hi"
import {FaSignal,
    FaSearch,
    FaRegHandRock

} from "react-icons/fa"

const Values = () => {
  return (
    <Container>
        <Wrapper>
            <Tittle>Our Values</Tittle>
            <Line/>
            <BoxHolder>
                <Box>
                    <Icon>
                        <HiUserGroup/>
                    </Icon>
                    <Theme>Community</Theme>
                    <Theme2>Underrepresented
                    individuals</Theme2>
                </Box>
                <Box>
                    <Icon>
                        <FaSignal/>
                    </Icon>
                    <Theme>Opportunity</Theme>
                    <Theme2>Diverse teams are
                    more creative</Theme2>
                </Box>
                <Box>
                <Icon>
                    <FaSearch/>
                </Icon>
                <Theme>Diversity</Theme>
                <Theme2>Identifying
                diverse talent</Theme2>
            </Box>
            <Box>
            <Icon>
                <FaRegHandRock/>
            </Icon>
            <Theme>Empowerment</Theme>
            <Theme2>Empowering individuals, teams and organisations through diversity</Theme2>
        </Box>
            </BoxHolder>
            <Button>Tell me Why</Button>
        </Wrapper>
    </Container>
  )
}

export default Values
const Button = styled.div`
margin-top: 40px;
height: 60px;
width: 180px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 35px;
outline: none;
border: none;
font-weight:bold;
 background-color:#617783 ;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    margin-top: 40px;
height: 60px;
width: 180px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 35px;
outline: none;
border: none;
font-weight:bold;
 background-color:#617783 ;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  }
`
const Theme2 = styled.div`
font-size:20px ;
text-align:center ;
@media screen and (max-width: 768px){
font-size:20px ;
text-align:center ;
}

`
const Theme = styled.div`
font-size:30px ;
margin-top:10px ;
@media screen and (max-width: 768px){
    font-size:25px ;
margin-top:10px ;
}
`
const Icon = styled.div`
height: 60px;
width:60px ;
border-radius:100% ;
background-color: #F6F6F6;
display:flex ;
justify-content:center ;
align-items:center ;
color: #000;
font-size:30px ;
@media screen and (max-width: 768px){
    height: 50px;
width:50px ;
border-radius:100% ;
background-color: #F6F6F6;
display:flex ;
justify-content:center ;
align-items:center ;
color: #000;
font-size:25px ;
}
`
const Box = styled.div`
margin-top: 20px;
height: 300px;
width:300px ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
@media screen and (max-width: 768px){
height: 300px;
width:250px ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content: center;
}

`


const BoxHolder = styled.div`
height: 300px;
width: 100%;
display:flex ;
justify-content:space-between ;
color:#676767;
@media screen and (max-width: 768px){
height: 900px;
width: 100%;
display:flex ;
justify-content:space-between ;
align-items:center;
color:#676767;
flex-direction:column ;
}


`

const Line = styled.div`
height:2px ;
width:100px ;
background-color:#617783 ;
margin-top: 20px;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    height:2px ;
width:100px ;
background-color:#617783 ;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  }
`

const Tittle = styled.div`
font-size:40px ;
color:#676767 ;
@media screen and (max-width: 768px){
    font-size:35px ;
color:#676767 ;
}
`
const Wrapper = styled.div`
height: 700px;
width: 90vw;
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column ;
@media screen and (max-width: 768px){
    height: 1100px;
width: 90vw;
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column ;
}

`
const Container = styled.div`
height: 700px;
width: 100vw;
display:flex ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 768px){
height: 1100px;
width: 100vw;
display:flex ;
justify-content:center ;
align-items:center ;
}
`