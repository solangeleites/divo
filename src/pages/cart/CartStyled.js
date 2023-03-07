import styled from 'styled-components';
import { MOBILE, TABLET } from '../../queries/Queries';

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
  ${MOBILE} {
    padding: 10px;
  }
`;
export const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;
export const TopTexts = styled.div`
${MOBILE} {
  display: none;
}
${TABLET} {
  display: none;
}
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${MOBILE} {
    flex-direction: column;
  }
  ${TABLET} {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${MOBILE} {
    flex-direction: column;
  }
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span``;
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span``;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ProductAmount = styled.div`
  font-size: 18px;
  margin: 5px;
  ${MOBILE} {
    margin: 5px 15px;
  }
`;
export const ProductPrice = styled.div`
  font-size: 22px;
  font-weight: 300;
  ${MOBILE} {
    margin-bottom: 20px;
  }
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;
export const SummaryTitle = styled.h2`
  font-weight: 200;
`;
export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '22px'};
`;
export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;
export const SummaryItemTotal = styled.div``;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
