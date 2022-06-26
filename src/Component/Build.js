import React from 'react'
import styled from 'styled-components'

const Build = () => {
  return (
    <Component>
        <Wrapper>
           
            <ImageHolder>
            <Title>Build an innovation and 
            delivery minded team</Title>
            <Line/>
            <ImageDiv>
                <Image src="/assets/new1.jpg"/>

            </ImageDiv>
        </ImageHolder>
        <TextHolder>
                <Text>We have observed the challenges of 
                virtual teams and talents, seen the soft 
                skill gap, the shortage in experience 
                and challenges with productivity.
                Build a team not only interested in the
                coding but deeply passionate in solving 
                problems and with balanced skillset 
                to deliver result</Text>
               <ButtonHolder>
               <Button>Hire Talents </Button>
               </ButtonHolder>
            </TextHolder>
        </Wrapper>
    </Component>
  )
}

export default Build



const ButtonHolder = styled.div`
display:flex ;
width:100% ;
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
width: 300px;
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
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`


const Text = styled.div`
font-size:18px ;
width:350px ;
margin-top:40px ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const TextHolder = styled.div`
height:600px ;
width:50% ;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content: center;
text-align:left ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`

const Image = styled.img`
height: 400px;
width: 500px;
border-radius: 12px;
object-fit:cover ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const ImageDiv = styled.div`
margin-top:40px ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const Line = styled.div`
height:3px ;
width:100px ;
border-radius: 2px;
background-color:#073FA0;
margin-top: 20px;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}


`
const Title = styled.div`
font-size:30px ;
font-weight: bolder;

margin-top: 20px;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const ImageHolder = styled.div`
height:600px ;
width:50% ;
display:flex ;
flex-direction: column ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const Wrapper = styled.div`
height:600px ;
width:80vw ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
align-items:center ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`


const Component = styled.div`
height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins;
margin-top:40px ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`