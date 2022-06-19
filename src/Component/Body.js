import React from 'react'
import styled from "styled-components"

const Body = () => {
  return (

    <Container>
        <Wrapper>
            <BGimage/>
            <Content>
              <Text1>We Accelerate Innovative Talents.</Text1>
              <Text2>Build your Innovation and Engineering Team with Innotals</Text2>
              <Text3>Innotals is africa’s best talent accelerator providing world-class talents <br/>with exceptional soft skills</Text3>
             <ButtonHolder>
              <Button>join Innotals</Button>
             </ButtonHolder>

            </Content>

        </Wrapper>
    </Container>
  )
}

export default Body

const ButtonHolder = styled.div`
display:flex ;
width:550px ;
justify-content:center ;
text-transform:capitalize ;
@media screen and (max-width: 768px){
display:flex ;
width:100% ;
justify-content:center ;
text-transform:capitalize ; 
}

`


const Button = styled.div`
margin-top: 40px;
height: 60px;
width: 250px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color:#2976FC;
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
width: 130px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
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
const Text3 = styled.div`
text-align:center;
@media screen and (max-width: 768px){
  margin-top:20px ;

}
`
const Text2 = styled.div`
margin-top:20px;
font-size: 30px;
font-weight:bold ;
color:white ;
text-align: center;
@media screen and (max-width: 768px){
  margin-top:20px;
  color:white ;
  text-align:center ;
  font-size: 20px;

}
`

const Text1 = styled.div`
font-size: 40px;
color: white;
font-weight:bold ;
margin-top:100px ;
text-align:center ;
@media screen and (max-width: 768px){
  font-size: 25px;
  color: white;
font-weight:bold ;
text-align:center ;
color:white ;
}
`

const Content = styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction: column;
justify-content:center ;
align-items:center ;
color: white;
margin-top:100px ;
@media screen and (max-width: 768px){
  height: 100%;
width: 100%;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center ;
color: white;
margin-top:-30px ;
}
`

const HeaderH = styled.div``


const BGimage = styled.img`
background-image: url("/assets/body.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
position:absolute ;
top: 0;
right: 0;
left: 0;
z-index: -1;
height: 600px;
width: 100vw;
@media screen and (max-width: 768px){
}
`

const Wrapper = styled.div`
height: 100%;
width: 90%;
display:flex ;
align-items:center ;
@media screen and (max-width: 768px){
  height: 100%;
width: 90%;
display:flex ;
align-items:center ;
justify-content:center ;
}
`

const Container = styled.div`
height: 600px;
width: 100vw;
display: flex;
justify-content:center;
font-family:poppins ;
align-items: center;
@media screen and (max-width: 768px){
}
`