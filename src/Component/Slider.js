import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const Slider = () => {
  return (
    <Container>
    <Carousel fade >
    <Carousel.Item >
      <Image
        className="d-block w-100"
        src="/assets/pix2.jpg"
        alt="First slide"
      />
      <Carousel.Caption>

        <TextHolder>
        <Text>We Accelerate Innovative Talents. Build your Innovation and Engineering Team with Innotals</Text>
        <Button>Join us</Button>
        </TextHolder>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/assets/guy.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <TextHolder>
        <Text>Innotals is Africa’s best talent  accelerator providing world-class talent with exceptional soft skills</Text>
        <Button>Join us</Button>

        </TextHolder>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/assets/pix.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <TextHolder>

        <Text>Innotals is Africa’s best talent  accelerator providing world-class talent with exceptional soft skills</Text>
        <Button>Join us</Button>
        </TextHolder>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
    </Container>
  )
}

export default Slider

const Text = styled.p`
text-transform: uppercase;
font-weight:bold ;
font-size:30px ;
@media screen and (max-width:768px){
  text-transform:capitalize;
font-weight:bold ;
font-size:15px ;
}
`

const TextHolder = styled.div`
text-align: center;
display:flex ;
flex-direction: column;
justify-content:center ;
font-family:poppins ;
align-items:center ;
`

const Image = styled.img`
height: 500px;
  width: 100%;
  object-fit: cover;
`

const Container = styled.div`
margin-top: 80px;
height: 500px;
  width: 100vw;
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
border-radius: 25px;
outline: none;
border: none;
font-weight:bold;
background-color: #123456;
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
background-color: #123456;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
}
`