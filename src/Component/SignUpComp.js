import React from 'react'
import styled from 'styled-components'

const SignUpComp = () => {
  return (
    <Container>
        <Wrapper>
            <Content>
                <Text>
                    <Title>Want to keep up to date?</Title>
                    <OtherText>We're finding incredible talent in underrepresented communities. So sign up to our mailing list to stay up to date with everything we are doing</OtherText>
                </Text>
              
                <Button>Sign Up Today</Button>
            </Content>
        </Wrapper>
    </Container>
  )
}

export default SignUpComp

const Input = styled.input`
height:50px ;
width:650px ;
border-radius:8px ;
outline:none ;
margin: 20px 0;
padding-left: 10px;
  

  ::placeholder {
    font-family: Poppins;
    font-size: 16px;
  }
border:none ;
@media screen and (max-width: 768px){
    width:280px ;
    height:50px ;
border-radius:8px ;
outline:none ;
margin: 20px 0;
padding-left: 10px;

}

`

const Button = styled.div`
margin-top:40px ;
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


const OtherText = styled.div`
width:700px ;
margin-top:40px ;
font-size:13px ;
@media screen and (max-width:768px){
width:280px ;
margin-top:20px ;
font-size:13px ;
}
`


const Title = styled.div`
font-size:40px ;
@media screen and (max-width:768px){
    font-size:20px ;

}
`

const Text=styled.div`
color: #fff;
text-align: center;
@media screen and (max-width: 768px){
    color: #fff;
text-align: center;
}

`

const Content = styled.div`
height: 500px;
width:90vw ;
display: flex;
justify-content:center ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 768px){
 height: 400px;
width:90vw ;
display: flex;
justify-content:center ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
}
`



const Wrapper = styled.div`
height: 500px;
width:90vw ;
display: flex;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 768px){
    height: 400px;
width:90vw ;
display: flex;
justify-content:center ;
align-items:center ;
}
`

const Container = styled.div`
height:500px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/code2.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
@media screen and (max-width: 768px){
height:400px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
background-image: url("/assets/code2.jpg");
background-repeat:no-repeat ;
background-size:cover ;
background-position: top;
}
`