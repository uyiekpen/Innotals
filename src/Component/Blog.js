import React from 'react'
import styled from 'styled-components'

const Blog = () => {
  return (
    <Container>
        <Wrapper>
            <BGImage/>
            <AnotherCard>
            <Title>We Propel Women in STEM</Title>
            <Text>Not just for underrepresentation, but for the high intelligence, commitment to learning, effective delivery and deliberate growth efforts, we train young girls in high school and universities or colleges in STEM / Tech Skills. If you’re young lady seeking a fresh start or career in Tech, here is your place</Text>
                        <Button>Join WiSTEM</Button>

            </AnotherCard>
            
            


        </Wrapper>
    
    </Container>
  )
}

export default Blog

const Button = styled.div`
margin-top: 40px;
height: 40px;
width: 150px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color: white;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 768px){
    margin-top: 40px;
height: 40px;
width: 150px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
border-radius: 5px;
outline: none;
border: none;
font-weight:bold;
background-color: white;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
}
`

const Text = styled.div`
margin-top:20px ;
@media screen and (max-width: 468px){
font-size:12px ;
}
`

const Title = styled.div`
text-transform:uppercase ;
`


const AnotherCard = styled.div`
position:relative ;
color: white;
height:300px;
border-radius:12px;
background-color:#8B6E5C;
opacity: 80%;
width:500px ;
padding:20px 20px 20px 20px ;
font-weight:bold ;
font-family:poppins ;
left:290px;
@media screen and (max-width: 768px){
  position:relative ;
color: white;
height:300px;
border-radius:12px;
background-color:#8B6E5C;
opacity: 80%;
width:400px ;
padding:20px 20px 20px 20px ;
font-weight:bold ;
font-family:poppins ;
left:20px;

}
@media screen and (max-width: 468px){
position:relative ;
color: white;
height:350px;
border-radius:12px;
background-color:#8B6E5C;
opacity: 80%;
width:260px ;
padding:20px 20px 20px 20px ;
font-weight:bold ;
font-family:poppins ;
left:20px;

}
`


const BGImage = styled.div`
height:500px ;
width:70% ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/pix2.jpg");
background-repeat:no-repeat ;
background-size:cover ;
border-radius:12px ;
position:absolute ;




@media screen and (max-width: 760px){
  height:500px ;
width:70% ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/pix2.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
border-radius:10px ;
}
@media screen and (max-width: 468px){
  height:500px ;
width:90% ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/pix2.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
border-radius:10px ;
}
`

const Wrapper = styled.div`
height:600px ;
width:90vw ;
display:flex ;
flex-direction: column;
justify-content:center;
align-items:center ;

@media screen and (max-width: 760px){
height:600px ;
width:90vw ;
display:flex ;
flex-direction: column;
align-items:center ;
justify-content:center
}

@media screen and (max-width: 468px){
height:600px ;
width:90vw ;
display:flex ;
flex-direction: column;
align-items:center ;
justify-content:center
}
`

const Container = styled.div`
height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 760px) {
    height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ; 
}
@media screen and (max-width: 48px) {
    height:600px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ; 
}
`