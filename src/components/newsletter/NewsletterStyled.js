import styled from 'styled-components';
import { MOBILE, TABLET } from '../../queries/Queries';
export const Container = styled.div`
  height: 60vh;
  background-color:  #52b69a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const Title = styled.h2`
font-size: 30px;
margin-bottom: 20px;

`;
export const Description = styled.p`
font-size: 20px;
font-weight: 300;
margin-bottom: 20px;
${MOBILE}{
  text-align: center;
}

`;
export const InputContainer = styled.div`
background-color: #fff;
width: 30%;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${MOBILE}{
  width: 50%;
}
`;


export const Input = styled.input`
border: none;
flex: 7;
padding-left: 20px;
outline: none;
`;
export const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
cursor: pointer;
`;
