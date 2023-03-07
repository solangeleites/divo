import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  Image,
  ProductColor,
  ProductDetail,
  ProductName,
  ProductSize,
  PriceDetail,
  Details,
  ProductAmount,
  ProductAmountContainer,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryItemTotal,
  Button,
} from './CartStyled';
import React from 'react';
import Layout from '../../components/layout/Layout';
import Footer from '../../components/footer/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {


  return (
    <Container>
      <Layout />
      <Wrapper>
        <Title>Tu carrito </Title>
        <Top>
          <TopButton>Seguir comprando</TopButton>
          <TopTexts>
            <TopText>Carrito de compras(2)</TopText>
            <TopText>Lista de deseos(2)</TopText>
          </TopTexts>
          <TopButton type="filled">Finalizar compra</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src=" https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  " />
                <Details>
                  <ProductName>
                    {' '}
                    <b>Product:</b>Nombre del producto
                  </ProductName>
                  <ProductColor color="grey"></ProductColor>
                  <ProductSize>
                    {' '}
                    <b>Size:</b>37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon  />
                  <ProductAmount></ProductAmount>
                  <RemoveIcon  />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src=" https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  " />
                <Details>
                  <ProductName>
                    {' '}
                    <b>Product:</b>Nombre del producto
                  </ProductName>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>
                    {' '}
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon  />
                  <ProductAmount></ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>$15</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> $48.5</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice> $3.50</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice> $ -3.50</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemTotal>Total</SummaryItemTotal>
              <SummaryItemPrice> $45</SummaryItemPrice>
            </SummaryItem>
            <Button>Comprar ahora</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
