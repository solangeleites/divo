import styled from "styled-components";
import { MOBILE, TABLET } from "../../queries/Queries";

export const Container = styled.div`
background: url("https://images.pexels.com/photos/4923049/pexels-photo-4923049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center/cover;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
export const Link = styled.a`
margin : 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${MOBILE} {
    width: 75%;
  }
  ${TABLET} {
    width: 75%;
  }

`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
display: flex;
flex-direction: column;
`;
export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;
export const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
font-size: 14px;
text-transform: uppercase;
margin-bottom: 10px;`;