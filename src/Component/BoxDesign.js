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
                      <Image/>
                    </ImageHolder>
                    <TextHolder>
                      <Name>Daniel James</Name>
                      <Name>Daniel James</Name>
                      <Name>Daniel James</Name>
                      <Button>View Bio</Button>

                    </TextHolder>
                  </Card>
                  <Card>
                  <ImageHolder>
                  <Image/>
                </ImageHolder>
                <TextHolder>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
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
                  <Image/>
                </ImageHolder>
                <TextHolder>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
                  <Button>View Bio</Button>

                </TextHolder>
                  </Card>
                  <Card>
                  <ImageHolder>
                  <Image/>
                </ImageHolder>
                <TextHolder>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
                  <Name>Daniel James</Name>
                  <Button>View Bio</Button>

                </TextHolder>
                  </Card>
                  </CardHolder2>

                </CardHolder>
              </RightDiv>

            </DownDiv>

          </FirstBox>
        </FirstBoxHolder>
        <SecondBoxHolder>
          <SecondBox>

          </SecondBox>
        </SecondBoxHolder>
      </Wrapper>
    </Components>
  )
}

export default BoxDesign
const Button = styled.div`
margin-top:10px;
height: 30px;
width: 70px;
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
const Name = styled.div``
const TextHolder = styled.div``
const Image = styled.div``

const ImageHolder = styled.div`
height: 70px;
width:100px ;
background-color:red;
`

const Cirle2 = styled.div`
height:10px;
width:10px ;
border-radius:100%;
border:1px solid #2976FC ;

`
const Cirle1 = styled.div`
height:10px;
width:10px ;
border-radius:100%;
background-color:#2976FC;

`
const CircleHolder = styled.div`
display:flex ;
justify-content:space-between ;
margin-top:20px ;
width:40px ;

`


const CardHolder2 = styled.div`
display:flex ;
width:100% ;
justify-content:space-between;
`
const Card= styled.div`
width:275px ;
height:152.46px ;
border-radius:14.26px;
border:1px solid #2976FC ;
margin-top: 10px;
display: flex;
justify-content:center;
justify-content:space-around;
align-items:center ;

`
const CardHolder1 = styled.div`
display:flex ;
width:100% ;
justify-content:space-between;
`


const CardHolder = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
flex-direction:column ;
`

const Title = styled.div`
margin-top:20px ;
font-weight:bolder;
text-align:left ;
width:100% ;

`

const RightDiv = styled.div`
flex:5 ;
padding:20px ;

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
`
const HolderContent1 = styled.div`
display:flex ;
height:40px;
width:60% ;
background-color: #2976FC ;
justify-content:space-evenly;
align-items: center;
border-radius: 12px 0px 0px 12px;
div{
  font-weight: bold ;
  color: #fff;
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
`
const Holder = styled.div`
display:flex ;
flex-direction:column ;
align-items:flex-end ;
width:100% ;
height:100% ;
margin-top:40px;
`

const LeftDiv = styled.div`
flex: 1.5;
border-right: 1px solid #2976FC;
`
const DownDiv = styled.div`
width:100% ;
display:flex ;
height:489px ;

`


const Avatar = styled.img`
height:40px ;
width:40px ;
object-fit:contain ;
border-radius:100% ;
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
`

const IconHolder = styled.div`
display:flex ;
height:60px ;
width:150px ;
justify-content:center ;
align-items:center ;
justify-content:space-between ;
`



const Div = styled(FiSearch)`
position:absolute ;
margin-left:40px;

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
`
const SearchDiv = styled.div`
display:flex ;
justify-content:space-around ;
align-items:center ;
width:150px ;


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
`
const UpDiv = styled.div`
width:60vw ;
height:60px ;
border-radius: 57.0px 57.0px 0px 0px  ;
display:flex ;
justify-content:center ;
align-items:center ;
border:1px solid #2976FC ;
`

const SecondBox = styled.div``
const SecondBoxHolder = styled.div`
height:400px ;
width:20vw ;
border-radius:47.55px ;
margin-top: -30px;
box-shadow: 0px 12px #2976FC;
border:1px solid #2976FC ;
background-color:white ;


`
const FirstBox = styled.div``
const FirstBoxHolder = styled.div`
height:550px ;
width:60vw ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #2976FC ;
background-color:white ;
`
const Wrapper = styled.div`
width: 90vw;
height:700px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
`

const Components = styled.div`
width: 100vw;
height:700px ;
display:flex ;
justify-content:center ;
align-items:center ;
font-family:poppins ;
`