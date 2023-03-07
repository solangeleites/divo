import styled from "styled-components";
import {MOBILE, TABLET} from "../../queries/Queries";
export const  Container  = styled.div`
height: 60px;

${MOBILE}{
    height: 50px;
}

`
export const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
${MOBILE}{
    padding: 10px 0px;
}
`
export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
export const SearchContainer = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
`
export const Input = styled.input`
border: none;
outline: none;
${MOBILE}{
    width: 50px;
}
`

export const Center= styled.div`
flex: 1;
text-align: center;
`
export const Logo = styled.h1`
font-weight: bold;
${MOBILE}{
    font-size: 24px;
}
`
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${MOBILE}{
    justify-content: center;
    flex: 2;
}
`
export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${MOBILE}{
    font-size: 12px;
    margin-left: 10px;
}

`