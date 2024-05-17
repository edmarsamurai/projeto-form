import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
top: 497px;
left: 35px;
gap: 0px;
border-radius: 14px 0px 0px 0px;
opacity: 0px;
background: ${ props => props.isBack ? 'transparent' : '#000000CC'};
border: ${ props => props.isBack ? '1px solid #ffff' : 'none'};


font-size: 17px;
font-weight: 700;
line-height: 28px;
cursor: pointer;

color: #FFFFFF;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover {
    opacity: .7;
}

&:active {
    opacity: .5;
}

img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
}
`