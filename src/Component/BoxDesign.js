import React from 'react'
import styled from "styled-components"
import {FiSearch,FiSettings} from "react-icons/fi"
import {BsCalendar2Date,BsBagDash} from "react-icons/bs"
import {MdNotificationsNone} from "react-icons/md"
import {AiOutlineDown,AiOutlineHome} from "react-icons/ai"

const BoxDesign = () => {
  return (
    <Components>
      <Wrapper>
        <FirstBoxHolder>
          <FirstBox>
            <UpDiv>
              <DivHolder>
              <LogoHolder>
              <Logo src="/assets/Logo.png"/>

              </LogoHolder>
              <OtherDiv>
                <SearchDiv>
                  <Input placeholder='Search'  />
                  <Div/>
                </SearchDiv>
                <IconHolder>
                  <Circle>
                    <Div2/>

                  </Circle>
                  <Circle>
                    <Div3/>

                  </Circle>
                  <Circle>
                    <Avatar src="/assets/avatar.png"/>

                  </Circle>
                    <Div4/>



                </IconHolder>
              </OtherDiv>
              </DivHolder>
            </UpDiv>
            <DownDiv>
              <LeftDiv>
                <Holder>
                  <HolderContent>
                    <div><AiOutlineHome/></div>
                    <div>Home</div>
                  </HolderContent>
                  <HolderContent1>
                    <div><BsBagDash/></div>     <div>interview</div>
                  </HolderContent1>
                  <HolderContent2>
                    <div><FiSettings/></div>
                    <div>contact</div>
                  </HolderContent2>

                </Holder>
              </LeftDiv>
              <RightDiv>
                <Title>Schedule interview</Title>
                <CardHolder>
                  <CardHolder1>
                  <Card>
                    <ImageHolder>
                      <Image src="/assets/guy.jpg"/>
                      <Button1>virtual</Button1>
                      
                    </ImageHolder>
                    <TextHolder>
                    <Name1>Daniel James</Name1>
                    <Name>Product designer</Name>
                    <Name3>24/04/22</Name3>
                    <Button>View Bio</Button>
  

                    </TextHolder>
                  </Card>
                  <Card>
                  <ImageHolder>
                  <Image src="/assets/women.jpg"/>
                  <Button1>Physical</Button1>

                </ImageHolder>
                <TextHolder>
                  <Name1>Joy Felix</Name1>
                  <Name>front-end dev</Name>
                  <Name3>24/04/22</Name3>
                  <Button>View Bio</Button>

                </TextHolder>
                  </Card>
                  </CardHolder1>
                  <CircleHolder>
                    <Cirle1/>
                    <Cirle2/>
                    <Cirle2/>
                  </CircleHolder>
                  <Title>Schedule new interview</Title>
                  <CardHolder2>
                  <Card>
                  <ImageHolder>
                  <Image src="/assets/guy.jpg"/>
                  <Button2>virtual <AiOutlineDown/></Button2>

                </ImageHolder>
                <TextHolder>
                  <Name1>Victor Braman</Name1>
                  <Name>Back-end Dev</Name>
                  <Name3>22/04/2022</Name3>
                  <Button>View Bio</Button>

                </TextHolder>
                  </Card>
                  <Card2>
                  <ImageHolder>
                    <Image src="/assets/girl.jpg"/>
                    <Button2>virtual <AiOutlineDown/></Button2>
                  </ImageHolder>
                  <New>
                    <NewCard>
                      <Image2 src="/assets/guy.jpg"/>
                      <Tezt2>Daniel James</Tezt2>
                      <Text>Product designer</Text>
                      <Text>4 years Experience</Text>
                      <ButtonHolder>
                        <Button4>Adobe XD</Button4>
                        <Button4>Figma</Button4>
                        <Button4>Sketch</Button4>

                      </ButtonHolder>
                      
                      <Button5>View resume</Button5>


                    </NewCard>
                  </New>

               
                  </Card2>
                 
                  </CardHolder2>

                </CardHolder>
              </RightDiv>

            </DownDiv>

          </FirstBox>
        </FirstBoxHolder>
        <SecondBoxHolder>
          <SecondBox>
            <Image2 src="/assets/guy.jpg"/>
            <Tezt>Edet James</Tezt>
            <Text>Senior Product designer</Text>
            <Text>10 years Experience</Text>
            <ButtonHolder>
              <Button4>Facebook</Button4>
              <Button4>Microsoft</Button4>
              <Button4>Meta</Button4>

            </ButtonHolder>
            <Text1>Edet is is a vastly learned product designer with dream to pass down his knowledge to younger generation ... </Text1>
            <Button5>View resume</Button5>

          </SecondBox>
        </SecondBoxHolder>
      </Wrapper>
    </Components>
  )
}

export default BoxDesign

const Text1 = styled.div`
text-align:center ;
font-size:10px ;
font-weight:bold ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`


const Button5 = styled.div`
margin-top:10px;
height: 30px;
width: 200px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
background-color:#073FA0;
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
  margin-top:10px;
height: 30px;
width: 180px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
background-color:#073FA0;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Button4 = styled.div`
height: 20px;
width: 60px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:8px ;
outline: none;
border: 1px solid;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  height: 20px;
width: 50px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:8px ;
outline: none;
border: 1px solid;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const ButtonHolder = styled.div`
display:flex ;
justify-content:space-evenly;
width:100% ;
padding:10px ;
`
const Tezt = styled.div`
font-weight:bolder ;
text-transform:uppercase ;
font-size:15px ;
margin-bottom: 20px;
`

const Tezt2 = styled.div`
font-weight:bolder ;
`
const Text = styled.div`
font-weight:bold ;
font-size:10px ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const NewCard = styled.div`
position:absolute ;
height:300px ;
width:230px ;
bottom: -160px;
box-shadow: 0px 12px #073FA0;
border:1px solid #073FA0 ;
background-color:white ;
left: -70px;
border-radius: 28.515625px;
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  position:absolute ;
height:300px ;
width:200px ;
bottom: -160px;
box-shadow: 0px 12px #073FA0;
border:1px solid #073FA0 ;
background-color:white ;
left: -70px;
border-radius: 28.515625px;
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const New = styled.div`
position:relative ;

`

const Card2 = styled.div`
width:275px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #073FA0 ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  width:220px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #073FA0 ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`
const Button1 = styled.div`
margin-top:10px;
height: 30px;
width: 100px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  margin-top:10px;
height: 30px;
width: 60px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Button2 = styled.div`
margin-top:10px;
height: 30px;
width: 100px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  margin-top:10px;
height: 30px;
width: 70px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Button = styled.div`
margin-top:10px;
height: 30px;
width: 100px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
background-color:#073FA0;
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
  margin-top:10px;
height: 30px;
width: 60px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
outline: none;
border: none;
font-weight:bold;
border-radius: 5px;
background-color:#073FA0;
text-decoration: none;
color: white;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Name1 = styled.div`
font-weight:bold ;
font-size:12px ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Name3 = styled.div`
height: 30px;
width: 70px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
background-color: white;
color: #000;
outline: none;
border: none;
font-weight:bold;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
  @media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  height: 30px;
width: 60px;
display:flex ;
justify-content:center ;
justify-content:space-evenly ;
align-items:center ;
font-family: poppins;
font-size:10px ;
background-color: white;
color: #000;
outline: none;
border: none;
font-weight:bold;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;text-decoration: none;
color: black;
transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`


const Name = styled.div`
font-size:12px ;

`
const TextHolder = styled.div``
const Image = styled.img`
height: 70px;
width:100px ;
object-fit:cover ;
border-radius: 10px;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  height: 70px;
width:70px ;
object-fit:cover ;
border-radius: 10px;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Image2 = styled.img`
height: 100px;
width:100px ;
border-radius: 100%;
object-fit:cover ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  height: 80px;
width:80px ;
border-radius: 100%;
object-fit:cover ;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const ImageHolder = styled.div`

`

const Cirle2 = styled.div`
height:10px;
width:10px ;
border-radius:100%;
border:1px solid #073FA0 ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`
const Cirle1 = styled.div`
height:10px;
width:10px ;
border-radius:100%;
background-color:#073FA0;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`
const CircleHolder = styled.div`
display:flex ;
justify-content:space-between ;
margin-top:20px ;
width:40px ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`


const CardHolder2 = styled.div`
display:flex ;
width:100% ;
justify-content:space-between;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Card= styled.div`
width:275px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #073FA0 ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
width:200px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #073FA0 ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;
}
@media screen and (max-width: 425px){
  width:220px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #073FA0 ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;
}
@media screen and (max-width: 320px){
}

`


const CardHolder1 = styled.div`
display:flex ;
width:100% ;
justify-content:space-between;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`


const CardHolder = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const Title = styled.div`
margin-top:20px ;
font-weight:bolder;
text-align:left ;
width:100% ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`

const RightDiv = styled.div`
flex:5 ;
padding:20px ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  flex:5 ;
padding:20px ;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`
const HolderContent = styled.div`
display:flex ;
height:40px;
width:60% ;
justify-content:space-evenly;
align-items: center;
div{
  font-weight: bold ;
 
}
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const HolderContent1 = styled.div`
display:flex ;
height:40px;
width:60% ;
background-color: #073FA0 ;
justify-content:space-evenly;
align-items: center;
border-radius: 12px 0px 0px 12px;
div{
  font-weight: bold ;
  color: #fff;
}
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const HolderContent2= styled.div`
display:flex ;
height:40px;
width:60% ;
justify-content:space-evenly;
align-items: center;
div{
  font-weight: bold ;
}
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const Holder = styled.div`
display:flex ;
flex-direction:column ;
align-items:flex-end ;
width:100% ;
height:100% ;
margin-top:40px;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const LeftDiv = styled.div`
flex: 1.5;
border-right: 1px solid #073FA0;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  flex: 1.5;
border-right: 1px solid #073FA0;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const DownDiv = styled.div`
width:100% ;
display:flex ;
height:489px ;
@media screen and (max-width: 1024px){
  width:100% ;
display:flex ;
height:489px ;
}
@media screen and (max-width: 768px){
  width:100% ;
display:flex ;
height:489px ;
}
@media screen and (max-width: 425px){
  width:100% ;
display:flex ;
height:489px ;
}
@media screen and (max-width: 320px){
  width:100% ;
display:flex ;
height:489px ;
}
`


const Avatar = styled.img`
height:40px ;
width:40px ;
object-fit:contain ;
border-radius:100% ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const Div4 = styled(AiOutlineDown)``
const Div3 = styled(MdNotificationsNone)``
const Div2 = styled(BsCalendar2Date)``
const Circle = styled.div`
height:40px ;
width:40px ;
border-radius:100% ;
background-color:whitesmoke ;
display:flex ;
justify-content:center ;
align-items:center ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`

const IconHolder = styled.div`
display:flex ;
height:60px ;
width:150px ;
justify-content:center ;
align-items:center ;
justify-content:space-between ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`



const Div = styled(FiSearch)`
position:absolute ;
margin-left:40px;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}

`

const Input = styled.input`
height: 40px;
width:150px ;
background-color:whitesmoke ;
border:none ;
outline:none ;
border-radius:15px ;
display:flex ;
justify-content:center ;
align-items:center ;
position:relative ;

::placeholder{
font-family:poppins ;
padding:10px ;
}
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const SearchDiv = styled.div`
display:flex ;
justify-content:space-around ;
align-items:center ;
width:150px ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}


`
const OtherDiv = styled.div`
display:flex ;
width:330px ;
justify-content:space-between ;

`
const Logo = styled.img`
height: 30px;
width:40px ;
object-fit:contain ;
`
const LogoHolder = styled.div``

const DivHolder = styled.div`
width:90% ;
height:60px ;
display:flex ;
align-items:center ;
justify-content:space-between;
@media screen and (max-width: 1024px){
  width:90% ;
height:60px ;
display:flex ;
align-items:center ;
}
@media screen and (max-width: 768px){
  width:90% ;
height:60px ;
display:flex ;
align-items:center ;
}
@media screen and (max-width: 425px){
  width:90% ;
height:60px ;
display:flex ;
align-items:center ;
}
@media screen and (max-width: 320px){
  width:90% ;
height:60px ;
display:flex ;
align-items:center ;
}
`
const UpDiv = styled.div`
width:60vw ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #073FA0 ;
@media screen and (max-width: 1024px){
  width:100% ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #073FA0 ;
}
@media screen and (max-width: 768px){
  width:100% ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #073FA0 ;
}
@media screen and (max-width: 425px){
  width:100% ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #073FA0 ;
}
@media screen and (max-width: 320px){
  width:100% ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #073FA0 ;
}
`

const SecondBox = styled.div`
height:100% ;
width:100% ;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
`
const SecondBoxHolder = styled.div`
height:400px ;
width:20vw ;
border-radius:47.55px ;
margin-top: -30px;
box-shadow: 0px 12px #073FA0;
border:1px solid #073FA0 ;
background-color:white ;
@media screen and (max-width: 1024px){
}
@media screen and (max-width: 768px){
  height:400px ;
width:400px ;
border-radius:47.55px ;
margin-top: -30px;
box-shadow: 0px 12px #073FA0;
border:1px solid #073FA0 ;
background-color:white ;
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 320px){
}
`
const FirstBox = styled.div``
const FirstBoxHolder = styled.div`
height:550px ;
width:60vw ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #073FA0 ;
background-color:white ;
@media screen and (max-width: 1024px){
  height:550px ;
width:75vw ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #073FA0 ;
background-color:white ;
}
@media screen and (max-width: 768px){
  height:550px ;
  width:85% ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #073FA0 ;
background-color:white ;
}
@media screen and (max-width: 425px){
  height:550px ;
width:100% ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #073FA0 ;
background-color:white ;
}
@media screen and (max-width: 425px){
  height:550px ;
width:100% ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #073FA0 ;
background-color:white ;
}
`
const Wrapper = styled.div`
width: 90vw;
height:700px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
@media screen and (max-width: 1024px){
width: 90vw;
height:1200px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
align-items:center ;
flex-direction:column;
}
@media screen and (max-width: 320px){
width: 90vw;
height:1200px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
flex-direction:column;
align-items:center ;

}
@media screen and (max-width: 425px){
width: 90vw;
height:1200px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
flex-direction:column;
align-items:center ;

}
@media screen and (max-width: 768px){
width: 90vw;
height:1200px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
flex-direction:column;
align-items:center ;

}
`

const Components = styled.div`
width: 100vw;
height:700px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
@media screen and (max-width:  1024px){
width: 100vw;
height:1200px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
}
@media screen and (max-width:  768px){
width: 100vw;
height:1200px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
}
@media screen and (max-width:  425px){
width: 100vw;
height:1400px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
}
@media screen and (max-width:  320px){
width: 100vw;
height:1200px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
}
`