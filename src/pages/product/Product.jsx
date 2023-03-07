import React, {useState} from 'react';
import Layout from '../../components/layout/Layout';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  Filter,
  FilterContainer,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from './ProductStyled';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) =>{
    if(type === 'decrement'){
      quantity > 1 && setQuantity(quantity - 1);
    }else{
      setQuantity(quantity + 1);
    }
  }

  return (
    <Container>
      <Layout />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Product Name</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum, natus necessitatibus ex unde porro officiis dignissimos dolore. Sed, maiores.</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon  onClick={()=> handleQuantity('decrement')} />
              <Amount>{quantity}</Amount>
              <AddIcon  onClick={()=> handleQuantity('increment')} />
            </AmountContainer>
            <Button onClick={() => handleShopNow} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
<Newsletter />
<Footer />
    </Container>
  );
};

export default Product;
