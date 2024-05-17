import styled from 'styled-components'
import Background from '../../assets/background1.svg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

`

export const Image = styled.img`
margin-top: 30px;
`


export const InputLabel = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
color: #EEEEEE;

margin-left: 25px;
`

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
width: 342px;
height: 58px;
top: 193px;
left: 36px;
padding: 15px 20px 15px 25px;
gap: 0px;
border-radius: 14px 0px 0px 0px;
opacity: 0px;
background: rgba(255, 255, 255, 0.25);
border: none;
outline: none;
padding-left: 27px;
margin-bottom: 34px;


font-size: 17px;
font-weight: 400;
line-height: 28.13px;
text-align: left;
color: #FFFFFF;

`



