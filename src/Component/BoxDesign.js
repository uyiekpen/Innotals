import React from 'react'
import styled from "styled-components"
import {FiSearch} from "react-icons/fi"
import {BsCalendar2Date} from "react-icons/bs"
import {MdNotificationsNone} from "react-icons/md"
import {AiOutlineDown} from "react-icons/ai"

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
                hello
              </LeftDiv>
              <RightDiv>
                hello
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

const RightDiv = styled.div`
flex:5 ;
`
const LeftDiv = styled.div`
flex: 1.5;
border-right: 1px solid #2976FC;
`
const DownDiv = styled.div`
width:100% ;
display:flex ;
height:438px ;

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
height:500px ;
width:60vw ;
border-radius:57.0px ;
margin-top: -30px;
border:1px solid #2976FC ;
background-color:white ;
`
const Wrapper = styled.div`
width: 90vw;
height:600px ;
display:flex ;
justify-content:center ;
justify-content:space-between ;
`

const Components = styled.div`
width: 100vw;
height:600px ;
display:flex ;
justify-content:center ;
align-items:center ;
`