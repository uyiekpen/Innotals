import React from 'react'
import styled from "styled-components"

const Body = () => {
  return (

    <Container>
        <Wrapper>
            <BGimage/>
            <Content>
              <Text1>Innovation through diversity</Text1>
              <Text2>We’re changing the way underrepresented technology talent is found, developed & showcased</Text2>
              <Button>Tell me More</Button>
            </Content>

        </Wrapper>
    </Container>
  )
}

export default Body

const Button = styled.div`
margin-top: 40px;
height: 60px;
width: 250px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 25px;
outline: none;
border: none;
font-weight:bold;
background-color: black;
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
width: 200px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 35px;
outline: none;
border: none;
font-weight:bold;
background-color: black;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
}
`
const Text2 = styled.div`
margin-top:40px;
@media screen and (max-width: 768px){
  margin-top:20px;
  color: orange;


}
`

const Text1 = styled.div`
font-size: 50px;
color: orange;
font-weight:bold ;
margin-top:100px ;
@media screen and (max-width: 768px){
  font-size: 30px;
  color: orange;
font-weight:lighter ;
margin-top:120px ;
}
`

const Content = styled.div`
height: 100%;
width: 50%;
display:flex;
flex-direction: column;
justify-content:center ;
color: white;
margin-top:100px ;
@media screen and (max-width: 768px){
  height: 100%;
width: 100%;
display:flex;
flex-direction: column;
justify-content:center ;
color: white;
margin-top:-30px ;

}
`

const HeaderH = styled.div``


const BGimage = styled.div`
background-image: url("/assets/image.jpg");
height: 100vh;
width: 100vw;
position:absolute;
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
top: 0;
right: 0;
left: 0;
z-index: -1;
@media screen and (max-width: 768px){
}

`

const Wrapper = styled.div`
height: 100%;
width: 90%;
display:flex ;
align-items:center ;
@media screen and (max-width: 768px){
}
`

const Container = styled.div`
height: 600px;
width: 100vw;
display: flex;
justify-content:center;
align-items: center;
@media screen and (max-width: 768px){
}
`
