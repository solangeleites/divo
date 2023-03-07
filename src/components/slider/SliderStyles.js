import styled from "styled-components";
import {MOBILE, TABLET, WIDESCREEN} from "../../queries/Queries";


export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: #f5f5f5;

    ${MOBILE} {
        display: none;
    }
    ${TABLET} {
        display: none;
    }

 
`
export const Arrow = styled.div`

    width: 30px;
    height: 30px;
    background-color: #cccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

export const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`
export const Slide = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;

`
export const ImgContainer = styled.div`
height: 100%;
flex: 1;
padding: 50px;
`
export const Image = styled.img`
height: 80%;

`
export const InfoContainer = styled.div`
flex: 1;
padding:50px;

`
export const Title = styled.h1`
font-size: 50px;

`
export const Desc= styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 2px;
`

export const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
transition: all 0.5s ease;

&:hover{
    background-color: black;
    color: white;
}
`