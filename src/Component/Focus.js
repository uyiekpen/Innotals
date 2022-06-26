import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowRight} from "react-icons/ai"

const Focus = () => {
  return (
    <Component>
        <Wrapper>
            <FirstDiv>
            <Title>Our Focus</Title>
            <Line/>
            </FirstDiv>
            <MainDiv>
            <ImageHolder>
                
                 
            <ImageDiv>
                <Image src="/assets/guy.jpg"/>
 
            </ImageDiv>
        </ImageHolder>
        <TextHolder>
            <Text>Building a tribe of self-motivated and innovative talents to build products,drive engineering, research and 
            innovations for organzatons</Text>
           <ButtonHolder>
           <Button>Find out More </Button>
           </ButtonHolder>
        </TextHolder>
        </MainDiv>
        </Wrapper>
        
    </Component>
  )
}

export default Focus




const ButtonHolder = styled.div`
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

const Button = styled.div`
color:#073FA0;
text-decoration:underline;
font-weight:bold ;
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
width: 400px;
font-size:20px ;
@media screen and (max-width: 1024px){
width: 400px;
font-size:15px ;
    
}
@media screen and (max-width: 768px){
    width: 300px;
font-size:15px ;
    
}
@media screen and (max-width: 425px){
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const TextHolder = styled.div`
height:500px ;
width:50% ;
display:flex ;
flex-direction:column ;
justify-content: center;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    height:200px ;
width:100% ;
display:flex ;
flex-direction:column ;
justify-content: center;
    
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
margin-top:40px ;
@media screen and (max-width: 1024px){
height: 400px;
width: 400px;
border-radius: 12px;
object-fit:cover ;
    
}
@media screen and (max-width: 768px){
    height: 300px;
width: 300px;
border-radius: 12px;
object-fit:cover ;
    
}
@media screen and (max-width: 425px){
    height: 300px;
width: 300px;
border-radius: 12px;
object-fit:cover ;
    
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const ImageDiv = styled.div`
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
height:100% ;
width:50% ;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
 height:400px ;
width:100% ;
    
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
margin-top:20px;
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
font-size:40px ;
font-weight: bolder;

margin-top: 20px;
@media screen and (max-width: 1024px){
    
}
@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 425px){
    font-size:20px ;
font-weight: bolder;
margin-top: 20px;
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const MainDiv = styled.div`
height:600px ;
width:100% ;
display:flex ;
justify-content:space-between ;

@media screen and (max-width: 1024px){
    height:600px ;
width:100% ;
display:flex ;
justify-content:space-between ;
    
}
@media screen and (max-width: 768px){
    height:600px ;
width:100% ;
display:flex ;
justify-content:space-between ;    
    
}
@media screen and (max-width: 425px){
    height:600px ;
width:100% ;
display:flex ;
flex-direction:column-reverse ;
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}

`
const FirstDiv = styled.div``

const Wrapper = styled.div`
height:600px ;
width:80vw ;
display:flex ;
flex-direction:column;
@media screen and (max-width: 1024px){
    height:600px ;
width:90vw ;
display:flex ;
flex-direction:column;
    
}
@media screen and (max-width: 768px){
    height:600px ;
width:90vw ;
display:flex ;
flex-direction:column;
    
}
@media screen and (max-width: 425px){
    height:700px ;
width:90vw ;
display:flex ;
flex-direction:column;
    
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
background-color:#8BD3E6;
font-family:poppins;
@media screen and (max-width: 1024px){
    height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-color:#8BD3E6;
font-family:poppins;
    
}
@media screen and (max-width: 768px){
    height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-color:#8BD3E6;
margin-top:30px ;
font-family:poppins;
    
}
@media screen and (max-width: 425px){
    height:700px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-color:#8BD3E6;
margin-top:30px ;
font-family:poppins;;
}
@media screen and (max-width: 360px){
    
}
@media screen and (max-width: 320px){
    
}


`