import React, { useState } from 'react';
import {
  Container,
  Title,
  Filter,
  FilterContainer,
  FilterText,
  Select,
  Option,
} from './ProductListStyled';
import Layout from '../../components/layout/Layout';
import Products from '../../components/products/Products';
import Newsletter from '../../components/newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });

  };
  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <Container>
      <Layout />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>

          <Select onChange={handleSort}>
            <Option value={'newest'}>Newest</Option>
            <Option value={'asc'}>Price (asc)</Option>
            <Option value={'desc'}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  cat ={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;


