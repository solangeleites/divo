import styled from 'styled-components';
import { MOBILE, TABLET } from '../../queries/Queries';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://images.pexels.com/photos/14585906/pexels-photo-14585906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
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
flex-wrap: wrap;
${MOBILE} {
    flex-direction: column;
  }
`;
export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
outline: none;
`;
export const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`;
export const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
font-size: 14px;
text-transform: uppercase;`;
