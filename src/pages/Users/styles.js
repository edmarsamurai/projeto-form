import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100vh;

`

export const Image = styled.img`
margin-top: 30px;
`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

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


font-size: 17px;
font-weight: 400;
line-height: 28.13px;
text-align: left;

color: #FFFFFF;


button {
background: none;
border: none;
cursor: pointer;
}


`