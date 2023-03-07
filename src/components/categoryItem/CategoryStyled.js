import styled from "styled-components";
import {MOBILE, TABLET} from "../../queries/Queries";

export const Container = styled.div`
  flex:1;
  margin: 5px;
  height: 70vh;
  position: relative;
  `

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${MOBILE}{
  height: 30vh;
  object-position: 0 33%;
}
`
export const Info = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${TABLET}{
text-align: center;
}
`
export const Title = styled.h2`
color: white;
text-shadow: 0 0 10px rgba(0,0,0,0.5);
margin-bottom: 20px;
${TABLET}{
  font-size: 20px;
}
`
export const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
transition: all 0.5s ease;

&:hover{
  background-color: gray;
  color: white;
}
`