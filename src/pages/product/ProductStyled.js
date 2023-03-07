import styled from 'styled-components';
import { MOBILE, TABLET } from '../../queries/Queries';

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${MOBILE} {
    padding: 10px;
    flex-direction: column;
  }
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${TABLET} {
    height: 40vh;
  }
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  ${MOBILE} {
    padding: 10px;
  }
`;
export const Title = styled.h2`
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
  ${MOBILE} {
    width: 100%;
  }
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const FilterSizeOption = styled.option``;
export const FilterSize = styled.select`
  margin-left: 10px;
`;
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${MOBILE} {
    width: 100%;
  }
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
export const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: teal;
    color: white;
    }
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
