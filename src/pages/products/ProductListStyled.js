import styled from 'styled-components';
import { MOBILE, TABLET } from '../../queries/Queries';

export const Container = styled.div``;
export const Title = styled.h2`
  margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Filter = styled.div`
  margin: 20px;
  ${MOBILE} {
   width: 0 20px;
   display: flex;
    flex-direction: column;
  } ;
`;

export const FilterText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
  ${MOBILE} {
    margin-right: 0%;
    }
`;
export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
    ${MOBILE} {
    margin: 10px 0;
    }
`;
export const Option = styled.option`
  padding: 10px;
`;
