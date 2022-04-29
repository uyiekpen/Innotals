import React from 'react'
import styled from 'styled-components'

const OurWhy = () => {
  return (
    <Container>
        <Wrapper>
            <BGimage />
            <TextHolder>
            <Our>Our Why</Our>
            <Line/>
            <Text>Empowering the underrepresented community to fulfil their potential through increasing diversity in technology.
            </Text>
            <Button>Show me How</Button>
            </TextHolder>

        </Wrapper>
    </Container>
  )
}

export default OurWhy

const Text = styled.div`
font-size:40px ;
color: orange;
margin-top:20px;
@media screen and (max-width: 768px){
  font-size:20px ;
color: orange;
margin-top:20px;
}


`

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
 background-color:#4A6572 ;
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

const TextHolder = styled.div`
height:700px ;
width:50%;
display:flex ;
flex-direction:column;
justify-content:center;
@media screen and (max-width: 768px){
height:500px ;
width:90vw;
display:flex ;
flex-direction:column;
}

`




const Our = styled.div`
font-size:40px ;
color: orange;
@media screen and (max-width: 768px){
  font-size:40px ;
color: orange;
}


`


const BGimage = styled.div`

`

const Wrapper = styled.div`
height:700px ;
width:90vw ;
display:flex ;
flex-direction:column ;
@media screen and (max-width: 768px){
  height:500px ;
width:90vw ;
display:flex ;
flex-direction:column ;
}
`

const Container = styled.div`
height:700px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/front.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
margin-top:20px ;
@media screen and (max-width: 768px){
  height:500px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/front.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
}

`