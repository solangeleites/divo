import styled from "styled-components";
import {MOBILE, TABLET} from "../../queries/Queries";


export const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${MOBILE}{
    padding: 0px;
    flex-direction: column;
}
`